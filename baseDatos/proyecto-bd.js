const conexion = require('./conexion');

async function insert(proyectos) {
    try {
        await conexion.execute('INSERT INTO proyectos (idproyecto, titulo, idCohorte, idAutores, paginas, idtecnicaturas) VALUES (?,?,?,?,?,?)', 
        [proyectos.idproyecto, proyectos.titulo, proyectos.idCohorte, proyectos.idAutores, proyectos.paginas, proyectos.idtecnicaturas]);
    } catch (err) {
        console.log('Error al insertar proyecto', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM vista_proyectos order by idproyecto ASC');
        return registro;
    } catch (err) {
        console.log('Error al consultar proyecto', err);
        throw err;
    }
}

async function update(proyectos) {
    try {
        const [res] = await conexion.execute(
            'UPDATE proyectos SET titulo = ?, idCohorte = ?, idAutores = ?, paginas = ?, idtecnicaturas = ? WHERE idproyecto = ?',
            [proyectos.titulo, proyectos.idCohorte, proyectos.idAutores, proyectos.paginas, proyectos.idtecnicaturas, proyectos.idproyecto]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar proyecto', err);
        throw err;
    }
}

async function eliminar(idproyecto) {
    try {
        await conexion.execute(
            'DELETE FROM proyectos WHERE idproyecto= ?',
            [idproyecto]
        );
    } catch (err) {
        console.log('Error al eliminar proyecto', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar}
