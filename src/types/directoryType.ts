export interface DirectoryType {
  name: string
  id: string
  path: string
  type: 'file' | 'folder'
  children: DirectoryType[] | null
  parent: DirectoryType | null
}
