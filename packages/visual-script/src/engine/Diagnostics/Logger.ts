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

/* eslint-disable no-console */

import { LogSeverity } from '../../Profiles/ProfilesModule.js'
import { EventEmitter } from '../Events/EventEmitter.js'

export enum LogLevel {
  Verbose = 0,
  Info = 1,
  Warning = 2,
  Error = 3
}

export function logSeverityToLevel(severity: LogSeverity) {
  switch (severity) {
    case 'verbose':
      return LogLevel.Verbose
    case 'info':
      return LogLevel.Info
    case 'warning':
      return LogLevel.Warning
    case 'error':
      return LogLevel.Error
  }
}
export enum PrefixStyle {
  None = 0,
  Time = 1
}

const Reset = '\x1b[0m'
const FgRed = '\x1b[31m'
const BgYellow = '\x1b[43m'
const Dim = '\x1b[2m'

export type LogMessage = { severity: LogSeverity; text: string }

export class Logger {
  static logLevel = LogLevel.Info
  static prefixStyle = PrefixStyle.None

  public static readonly onLog = new EventEmitter<LogMessage>()

  static {
    const prefix = (): string => {
      switch (Logger.prefixStyle) {
        case PrefixStyle.None:
          return ''
        case PrefixStyle.Time:
          return new Date().toLocaleTimeString().padStart(11, '0') + ' '
      }
    }

    Logger.onLog.addListener((logMessage: LogMessage) => {
      if (Logger.logLevel > logSeverityToLevel(logMessage.severity)) return
      console.log(prefix() + logMessage.text)
    })
  }

  static log(severity: LogSeverity, text: string) {
    this.onLog.emit({ severity, text })
  }

  static verbose(text: string) {
    this.onLog.emit({ severity: 'verbose', text })
  }

  static info(text: string) {
    this.onLog.emit({ severity: 'info', text })
  }

  static warning(text: string) {
    this.onLog.emit({ severity: 'warning', text })
  }

  static error(text: string) {
    this.onLog.emit({ severity: 'error', text })
  }
}