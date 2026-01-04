import { atom } from 'jotai'
import type { AppStateType } from '../types/appType'
import type { DirectoryType } from '../types/directoryType'

export const appStateAtom = atom<AppStateType>({
  finder: false,
})

export const directoryAtom = atom<DirectoryType>({
  name: 'directory',
  id: '0',
  path: '/',
  type: 'folder',
  children: null,
  parent: null,
})
