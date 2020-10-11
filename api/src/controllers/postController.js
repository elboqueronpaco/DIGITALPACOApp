export const postAll = async (req, res) => {
    // TODO desarrollar
   return res.json({ message: 'Todos los post'})
}

export const postById = async (req, res) => {
    // TODO desarrollar
    return res.json({message: 'Un solo post por id'})
}

/**
 * Crear un Post
 */
export const newPost = async (req, res) => {
    // TODO desarrollar
    return res.json({ message: 'Se ha creado un nuevo Post'})
}

/**
 * Editar los Post
 */
export const editPost = async (req, res) => {
    // TODO desarrollar
    return res.json({ message: 'Se ha editado un nuevo Post'})
}

export const deletePost = async (req, res) => {
    // TODO desarrollar
    return res.json({ message: 'eliminado el post'})
}