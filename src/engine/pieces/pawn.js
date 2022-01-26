import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    // getAvailableMoves(board) {
    //     let location = board.findPiece(this);
    //     let availableMoves=[];
    //     if (this.player === Player.WHITE) {
    //         if (location.row===1)
    //             availableMoves.push(Square.at(location.row + 2, location.col));
    //         availableMoves.push( Square.at(location.row + 1, location.col));
    //     } else {
    //         if (location.row===6)
    //             availableMoves.push(Square.at(location.row - 2, location.col));
    //         availableMoves.push( Square.at(location.row - 1, location.col));
    //     }
    //     return availableMoves;
    // }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves=[];
        if (this.player === Player.WHITE) { //pawns cannot capture forward, but can capture diagonally
            if (location.row===1 && board.getPiece(Square.at(location.row + 2, location.col))===undefined)
                availableMoves.push(Square.at(location.row + 2, location.col));
            if (board.getPiece(Square.at(location.row + 1, location.col))===undefined)
                availableMoves.push( Square.at(location.row + 1, location.col));
            //if there is an opponent's piece diagonally
            if (Square.is_valid( location.row+1,location.col-1)) { //diagonally left
                if (board.getPiece(Square.at(location.row+1,location.col-1))!==undefined)
                    if (board.getPiece(Square.at(location.row+1,location.col-1)).player===Player.BLACK)
                        availableMoves.push( Square.at(location.row+1,location.col-1));
            }
            if (Square.is_valid( location.row+1,location.col+1)) { //diagonally right
                if (board.getPiece(Square.at(location.row+1,location.col+1))!==undefined)
                    if (board.getPiece(Square.at(location.row+1,location.col+1)).player===Player.BLACK)
                        availableMoves.push( Square.at(location.row+1,location.col+1));
            }
        } else {
            if (location.row===6 && board.getPiece(Square.at(location.row - 2, location.col))===undefined)
                availableMoves.push(Square.at(location.row - 2, location.col));
            if (board.getPiece(Square.at(location.row - 1, location.col))===undefined)
                availableMoves.push( Square.at(location.row - 1, location.col));
            //if there is an opponent's piece diagonally
            if (Square.is_valid( location.row-1,location.col-1)) { //diagonally left
                if (board.getPiece(Square.at(location.row-1,location.col-1))!==undefined)
                    if (board.getPiece(Square.at(location.row-1,location.col-1)).player===Player.WHITE)
                        availableMoves.push( Square.at(location.row-1,location.col-1));
            }
            if (Square.is_valid( location.row-1,location.col+1)) { //diagonally right
                if (board.getPiece(Square.at(location.row-1,location.col+1))!==undefined)
                    if (board.getPiece(Square.at(location.row-1,location.col+1)).player===Player.WHITE)
                        availableMoves.push( Square.at(location.row-1,location.col+1));
            }
        }

        return availableMoves;
    }

    
}


