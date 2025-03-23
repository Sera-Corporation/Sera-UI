export type IconCategory = "ui" | "arrows" | "files" | "shapes" | "all"

export interface IconMeta {
  id: string
  name: string
  category: IconCategory
  isNew?: boolean
}

export const iconMetadata: IconMeta[] = [
  // UI Icons
  { id: "home", name: "Home", category: "ui" },
  { id: "settings", name: "Settings", category: "ui" },
  { id: "user", name: "User", category: "ui" },
  { id: "bell", name: "Bell", category: "ui" },
  { id: "search", name: "Search", category: "ui" },
  { id: "menu", name: "Menu", category: "ui" },
  { id: "x", name: "X", category: "ui" },
  { id: "check", name: "Check", category: "ui" },
  { id: "plus", name: "Plus", category: "ui" },
  { id: "minus", name: "Minus", category: "ui" },
  { id: "heart", name: "Heart", category: "ui" },
  { id: "star", name: "Star", category: "ui" },
  { id: "trash", name: "Trash", category: "ui" },
  { id: "edit", name: "Edit", category: "ui" },
  { id: "eye", name: "Eye", category: "ui" },
  { id: "eyeOff", name: "EyeOff", category: "ui" },
  { id: "logout", name: "LogOut", category: "ui" },
  { id: "login", name: "LogIn", category: "ui" },
  { id: "info", name: "Info", category: "ui" },
  { id: "alertCircle", name: "AlertCircle", category: "ui" },

  // Arrow Icons
  { id: "arrow-up", name: "ArrowUp", category: "arrows" },
  { id: "arrow-down", name: "ArrowDown", category: "arrows" },
  { id: "arrow-left", name: "ArrowLeft", category: "arrows" },
  { id: "arrow-right", name: "ArrowRight", category: "arrows" },
  { id: "chevron-up", name: "ChevronUp", category: "arrows" },
  { id: "chevron-down", name: "ChevronDown", category: "arrows" },
  { id: "chevron-left", name: "ChevronLeft", category: "arrows" },
  { id: "chevron-right", name: "ChevronRight", category: "arrows" },
  { id: "arrowUpCircle", name: "ArrowUpCircle", category: "arrows" },
  { id: "arrowDownCircle", name: "ArrowDownCircle", category: "arrows" },
  { id: "arrowLeftCircle", name: "ArrowLeftCircle", category: "arrows" },
  { id: "arrowRightCircle", name: "ArrowRightCircle", category: "arrows" },
  { id: "moveHorizontal", name: "MoveHorizontal", category: "arrows" },
  { id: "moveVertical", name: "MoveVertical", category: "arrows" },
  { id: "move", name: "Move", category: "arrows" },
  { id: "refreshCw", name: "RefreshCw", category: "arrows" },
  { id: "refreshCcw", name: "RefreshCcw", category: "arrows" },
  { id: "undo", name: "Undo", category: "arrows" },
  { id: "redo", name: "Redo", category: "arrows" },

  // File Icons
  { id: "file", name: "File", category: "files" },
  { id: "file-text", name: "FileText", category: "files" },
  { id: "folder", name: "Folder", category: "files" },
  { id: "save", name: "Save", category: "files" },
  { id: "trash", name: "Trash", category: "files" },
  { id: "download", name: "Download", category: "files" },
  { id: "upload", name: "Upload", category: "files" },
  { id: "fileCode", name: "FileCode", category: "files" },
  { id: "fileJson", name: "FileJson", category: "files" },
  { id: "fileArchive", name: "FileArchive", category: "files" },
  { id: "fileLock", name: "FileLock", category: "files" },
  { id: "fileSignature", name: "FileSignature", category: "files" },
  { id: "fileX", name: "FileX", category: "files" },
  { id: "filePlus", name: "FilePlus", category: "files" },
  { id: "fileMinus", name: "FileMinus", category: "files" },
  { id: "folderOpen", name: "FolderOpen", category: "files" },
  { id: "folderPlus", name: "FolderPlus", category: "files" },
  { id: "folderMinus", name: "FolderMinus", category: "files" },

  // Shape Icons
  { id: "square", name: "Square", category: "shapes" },
  { id: "circle", name: "Circle", category: "shapes" },
  { id: "triangle", name: "Triangle", category: "shapes" },
  { id: "hexagon", name: "Hexagon", category: "shapes" },
  { id: "star", name: "Star", category: "shapes" },
  { id: "heart", name: "Heart", category: "shapes" },
  { id: "pentagon", name: "Pentagon", category: "shapes" },
  { id: "octagon", name: "Octagon", category: "shapes" },
  { id: "diamond", name: "Diamond", category: "shapes" },
  { id: "cube", name: "Cube", category: "shapes" },
  { id: "box", name: "Box", category: "shapes" },
  { id: "cylinder", name: "Cylinder", category: "shapes" },
  { id: "sphere", name: "Sphere", category: "shapes" },
]

export function getIconsByCategory(category: IconCategory): IconMeta[] {
  if (category === "all") {
    return iconMetadata
  }
  return iconMetadata.filter((icon) => icon.category === category)
}

