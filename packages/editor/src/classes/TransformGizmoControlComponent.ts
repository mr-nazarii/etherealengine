/*
CPAL-1.0 License

The contents of this file are subject to the Common Public Attribution License
Version 1.0. (the "License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at
https://github.com/EtherealEngine/etherealengine/blob/dev/LICENSE.
The License is based on the Mozilla Public License Version 1.1, but Sections 14
and 15 have been added to cover use of software over a computer network and 
provide for limited attribution for the Original Developer. In addition, 
Exhibit A has been modified to be consistent with Exhibit B.

Software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the
specific language governing rights and limitations under the License.

The Original Code is Ethereal Engine.

The Original Developer is the Initial Developer. The Initial Developer of the
Original Code is the Ethereal Engine team.

All portions of the code written by the Ethereal Engine team are Copyright © 2021-2023 
Ethereal Engine. All Rights Reserved.
*/

import { Entity, UndefinedEntity, defineComponent, useComponent, useEntityContext } from '@etherealengine/ecs'
import {
  SnapMode,
  TransformAxisType,
  TransformMode,
  TransformModeType,
  TransformSpace,
  TransformSpaceType
} from '@etherealengine/engine/src/scene/constants/transformConstants'
import { getMutableState, useHookstate } from '@etherealengine/hyperflux'
import { matches } from '@etherealengine/spatial/src/common/functions/MatchesUtils'
import { EngineRenderer } from '@etherealengine/spatial/src/renderer/WebGLRendererSystem'
import { addObjectToGroup } from '@etherealengine/spatial/src/renderer/components/GroupComponent'
import { setObjectLayers } from '@etherealengine/spatial/src/renderer/components/ObjectLayerComponent'
import { ObjectLayers } from '@etherealengine/spatial/src/renderer/constants/ObjectLayers'
import { useEffect } from 'react'
import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Quaternion, Vector3 } from 'three'
import { degToRad } from 'three/src/math/MathUtils'
import { onPointerDown, onPointerHover, onPointerMove, onPointerUp } from '../functions/gizmoHelper'
import { EditorHelperState } from '../services/EditorHelperState'

export const TransformGizmoControlComponent = defineComponent({
  name: 'TransformGizmoControl',

  onInit(entity) {
    //const control = new TransformControls()
    const control = {
      controlledEntities: [] as Entity[],
      visualEntity: UndefinedEntity,
      planeEntity: UndefinedEntity,
      pivotEntity: UndefinedEntity,
      enabled: true,
      dragging: false,
      axis: null! as TransformAxisType | null,
      space: TransformSpace.world as TransformSpaceType,
      mode: TransformMode.translate as TransformModeType,
      translationSnap: null! as number,
      rotationSnap: null! as number,
      scaleSnap: null! as number,
      size: 1,
      showX: true,
      showY: true,
      showZ: true,
      worldPosition: new Vector3(),
      worldPositionStart: new Vector3(),
      worldQuaternion: new Quaternion(),
      worldQuaternionStart: new Quaternion(),
      pointStart: new Vector3(),
      pointEnd: new Vector3(),
      rotationAxis: new Vector3(),
      rotationAngle: 0,
      eye: new Vector3()
    }
    return control
  },
  onSet(entity, component, json) {
    if (!json) return

    if (matches.array.test(json.controlledEntities)) component.controlledEntities.set(json.controlledEntities)
    if (matches.number.test(json.visualEntity)) component.visualEntity.set(json.visualEntity)
    if (matches.number.test(json.pivotEntity)) component.pivotEntity.set(json.pivotEntity)
    if (matches.number.test(json.planeEntity)) component.planeEntity.set(json.planeEntity)

    if (typeof json.enabled === 'boolean') component.enabled.set(json.enabled)
    if (typeof json.dragging === 'boolean') component.dragging.set(json.dragging)
    if (typeof json.axis === 'string') component.axis.set(json.axis)
    if (typeof json.space === 'string') component.space.set(json.space)
    if (typeof json.mode === 'string') component.mode.set(json.mode)
    if (typeof json.translationSnap === 'number') component.translationSnap.set(json.translationSnap)
    if (typeof json.rotationSnap === 'number') component.rotationSnap.set(json.rotationSnap)
    if (typeof json.scaleSnap === 'number') component.scaleSnap.set(json.scaleSnap)
    if (typeof json.size === 'number') component.size.set(json.size)
    if (typeof json.showX === 'number') component.showX.set(json.showX)
    if (typeof json.showY === 'number') component.showY.set(json.showY)
    if (typeof json.showZ === 'number') component.showZ.set(json.showZ)
  },
  onRemove: (entity, component) => {
    component.controlledEntities.set([])
    component.visualEntity.set(UndefinedEntity)
    component.planeEntity.set(UndefinedEntity)
    component.pivotEntity.set(UndefinedEntity)
  },
  reactor: function (props) {
    const gizmoEntity = useEntityContext()
    const gizmoControlComponent = useComponent(gizmoEntity, TransformGizmoControlComponent)

    //const gizmoEntity = createEntity()
    const domElement = EngineRenderer.instance.renderer.domElement
    domElement.style.touchAction = 'none' // disable touch scroll , hmm the editor window isnt scrollable anyways

    //temp variables
    const editorHelperState = useHookstate(getMutableState(EditorHelperState))

    useEffect(() => {
      const plane = new Mesh(
        new PlaneGeometry(100000, 100000, 2, 2),
        new MeshBasicMaterial({
          visible: false,
          wireframe: true,
          side: DoubleSide,
          transparent: true,
          opacity: 0.1,
          toneMapped: false
        })
      )

      // create dummy object to attach gizmo to, we can only attach to three js objects
      domElement.addEventListener('pointerdown', (event) => {
        onPointerDown(event, gizmoEntity)
      })
      domElement.addEventListener('pointermove', (event) => {
        onPointerHover(event, gizmoEntity)
      })
      domElement.addEventListener('pointerup', (event) => {
        onPointerUp(event, gizmoEntity)
      })

      addObjectToGroup(gizmoControlComponent.planeEntity.value, plane)
      setObjectLayers(plane, ObjectLayers.TransformGizmo)

      return () => {
        domElement.removeEventListener('pointerdown', (event) => {
          onPointerDown(event, gizmoEntity)
        })
        domElement.removeEventListener('pointerhover', (event) => {
          onPointerHover(event, gizmoEntity)
        })
        domElement.removeEventListener('pointermove', (event) => {
          onPointerMove(event, gizmoEntity)
        })
        domElement.removeEventListener('pointerup', (event) => {
          onPointerUp(event, gizmoEntity)
        })
      }
    }, [])

    useEffect(() => {
      const mode = editorHelperState.transformMode.value
      gizmoControlComponent.mode.set(mode)
    }, [editorHelperState.transformMode])

    useEffect(() => {
      const space = editorHelperState.transformSpace.value
      gizmoControlComponent.space.set(space)
    }, [editorHelperState.transformSpace])

    useEffect(() => {
      switch (editorHelperState.gridSnap.value) {
        case SnapMode.Disabled: // continous update
          gizmoControlComponent.translationSnap.set(0)
          gizmoControlComponent.rotationSnap.set(0)
          gizmoControlComponent.scaleSnap.set(0)
          break
        case SnapMode.Grid:
          gizmoControlComponent.translationSnap.set(editorHelperState.translationSnap.value)
          gizmoControlComponent.rotationSnap.set(degToRad(editorHelperState.rotationSnap.value))
          gizmoControlComponent.scaleSnap.set(editorHelperState.scaleSnap.value)
          break
      }
    }, [editorHelperState.gridSnap])

    useEffect(() => {
      gizmoControlComponent.translationSnap.set(
        editorHelperState.gridSnap.value === SnapMode.Grid ? editorHelperState.translationSnap.value : 0
      )
    }, [editorHelperState.translationSnap])

    useEffect(() => {
      gizmoControlComponent.rotationSnap.set(
        editorHelperState.gridSnap.value === SnapMode.Grid ? degToRad(editorHelperState.rotationSnap.value) : 0
      )
    }, [editorHelperState.rotationSnap])

    useEffect(() => {
      gizmoControlComponent.scaleSnap.set(
        editorHelperState.gridSnap.value === SnapMode.Grid ? editorHelperState.scaleSnap.value : 0
      )
    }, [editorHelperState.scaleSnap])

    return null
  }
})
