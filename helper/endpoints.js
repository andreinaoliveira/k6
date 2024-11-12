const baseUrl = 'petstore.swagger.io/v2'


export const endpoints = {
    auth: {
        login: `${baseUrl}/login`,
        logout: `${baseUrl}/logout`
    },

    pet: {
        find: (id) => `${baseUrl}/pet/${id}`,
        createOrUpdate: `${baseUrl}/pet`,
        findByStatus: `${baseUrl}/pet/findByStatus`,
        delete: (id) => `${baseUrl}/pet/${id}`,
    },

    user: {
        create: `${baseUrl}/user`,
        findUpdDel: (name) => `${baseUrl}/user/${name}`,
        update: (name) => `${baseUrl}/user/${name}`,
        delete: (name) => `${baseUrl}/user/${name}`,
    },
}