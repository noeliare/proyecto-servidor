const conexion = require('./conexion');

async function insert(usuario) {
    try {
        await conexion.execute('INSERT INTO usuario (idusuario, nombres, apellidos, ci, email, administrador, password) VALUES(?, ?, ?, ?, ?, ?, ?)',
         [usuario.idusuario, usuario.nombres, usuario.apellidos, usuario.ci, usuario.email, usuario.administrador, usuario.password]);
        
    } catch (err) {
        console.log('Error al insertar el usuario', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM usuario');
        return registro;
    } catch (err) {
        console.log('Error al consultar el usuario', err);
        throw err;
    }
}

async function update(usuario) {
    try {
        const [res] = await conexion.execute(
            'UPDATE usuario SET nombres = ?, apellidos = ?, ci = ?, email = ?, administrador = ?, password = ? WHERE idusuario = ?',
            [usuario.nombres, usuario.apellidos, usuario.ci, usuario.email, usuario.administrador, usuario.password, usuario.idusuario]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar el usuario', err);
        throw err;
    }
}

async function eliminar(id) {
    try {
        await conexion.execute(
            'DELETE FROM usuario WHERE idusuario= ?',
            [id]
        );
    } catch (err) {
        console.log('Error al eliminar el usuario', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar}
