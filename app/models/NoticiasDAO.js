function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM Noticias ORDER BY data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('SELECT * FROM Noticias WHERE id_noticia= '+ id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){    
    this._connection.query('INSERT INTO NOTICIAS set ? ', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM NOTICIAS ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}