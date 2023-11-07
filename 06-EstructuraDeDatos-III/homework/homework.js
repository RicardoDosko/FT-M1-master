'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
//todo: BST -> árbol binario de búsqueda    mayor o menor
BinarySearchTree.prototype.insert = function(value) {
    if (value > this.value) {
        if (!this.right) {
            // ({}) -> true    (null) -> false  <- !null <- true  ==>  this.right === null
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    } else {
        // por defecto queda aquí <=
        if (!this.left) {
            // ({}) -> true    (null) -> false  <- !null <- true  ==>  this.left === null
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    }
};

BinarySearchTree.prototype.size = function() {
    if (!this.left && !this.right) {
        return 1;
    }
    if (!this.right) return 1 + this.left.size();
    if (!this.left) return 1 + this.right.size();
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.contains = function(value) {
    if (value === this.value) return true;
    //   if(!this.right && !this.left){
    //    return false
    //   }
    if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    } else {
        // console.log("in")
        if (!this.left) return false;
        else return this.left.contains(value);
    }
};
BinarySearchTree.prototype.depthFirstForEachSimple = function(result = []) {
    // params por defecto
    if (this.left) this.left.depthFirstForEachSimple(result);
    result.push(this.value);
    if (this.right) this.right.depthFirstForEachSimple(result);
    return result;
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
    if (order === "pre-order") {
        cb(this.value);
        if (this.left) this.left.depthFirstForEach(cb, order);
        if (this.right) this.right.depthFirstForEach(cb, order);
    } else if (order === "post-order") {
        if (this.left) this.left.depthFirstForEach(cb, order);
        if (this.right) this.right.depthFirstForEach(cb, order);
        cb(this.value);
    } else {
        if (this.left) this.left.depthFirstForEach(cb, order);
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb, order);
    }
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []) {
    if (this.left) queue.push(this.left);
    if (this.right) queue.push(this.right);
    cb(this.value);
    if (queue.length > 0) {
        let subTree = queue.shift();
        subTree.breadthFirstForEach(cb, queue);
    }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};