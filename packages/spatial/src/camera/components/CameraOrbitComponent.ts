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

import { Entity, UndefinedEntity, defineComponent } from '@etherealengine/ecs'
import { defineState } from '@etherealengine/hyperflux'
import { matchesEntity } from '@etherealengine/spatial/src/common/functions/MatchesUtils'
import { Vector3 } from 'three'
import matches from 'ts-matches'

export const ActiveOrbitCamera = defineState({
  name: 'ActiveOrbitCamera',
  initial: () => {
    return UndefinedEntity
  }
})

export const CameraOrbitComponent = defineComponent({
  name: 'CameraOrbitComponent',

  onInit: (entity) => {
    return {
      zoomDelta: 0,
      focusedEntities: [] as Entity[],
      isPanning: false,
      cursorDeltaX: 0,
      cursorDeltaY: 0,
      isOrbiting: false,
      refocus: false,
      cameraOrbitCenter: new Vector3(),
      inputEntity: UndefinedEntity,
      disabled: false
    }
  },

  onSet: (entity, component, json) => {
    if (!json) return
    if (matches.number.test(json.zoomDelta)) component.zoomDelta.set(json.zoomDelta)
    if (json.focusedEntities) component.focusedEntities.set(json.focusedEntities)
    if (matches.boolean.test(json.isPanning)) component.isPanning.set(json.isPanning)
    if (matches.number.test(json.cursorDeltaX)) component.cursorDeltaX.set(json.cursorDeltaX)
    if (matches.number.test(json.cursorDeltaY)) component.cursorDeltaY.set(json.cursorDeltaY)
    if (matches.boolean.test(json.isOrbiting)) component.isOrbiting.set(json.isOrbiting)
    if (matches.boolean.test(json.refocus)) component.refocus.set(json.refocus)
    if (matchesEntity.test(json.inputEntity)) component.inputEntity.set(json.inputEntity)
    if (matches.boolean.test(json.disabled)) component.disabled.set(json.disabled)
  }
})
