export interface DirectoryItemType {
  name: string
  id: string
  path: string
  type: DirectoryType
  children: DirectoryItemType[] | null
  parent: DirectoryItemType | null
}

export type DirectoryType = 'file' | 'folder'
