const conexion = require('./conexion');

async function insert(proyecto) {
    try {
        await conexion.execute('INSERT INTO proyecto(idproyecto, titulo, idcohorte, idautores, paginas, idtecnicaturas) VALUES(?, ?, ?, ?, ?, ?)', [proyecto.idproyecto, proyecto.titulo, proyecto.idcohorte, proyecto.idautores, proyecto.paginas, proyecto.idtecnicaturas]);
    } catch (err) {
        console.log('Error al insertar proyecto', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM proyectos order by idproyecto ASC');
        return registro;
    } catch (err) {
        console.log('Error al consultar proyecto', err);
        throw err;
    }
}

async function update(proyecto) {
    try {
        const [res] = await conexion.execute(
            'UPDATE proyecto SET titulo = ?, idcohorte = ?, idautores = ?, paginas = ?, idtecnicaturas = ? WHERE idproyecto = ?',
            [proyecto.titulo, proyecto.idcohorte, proyecto.idautores, proyecto.paginas, proyecto.idtecnicaturas, proyecto.idproyecto]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar proyecto', err);
        throw err;
    }
}

async function eliminar(id) {
    try {
        await conexion.execute(
            'DELETE FROM proyecto WHERE idproyecto= ?',
            [id]
        );
    } catch (err) {
        console.log('Error al eliminar proyecto', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar}
