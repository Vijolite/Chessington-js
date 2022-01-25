import Piece from './piece';
//import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];
        for (let i=0; i<8; i++) {           
            if (i!==location.row) {// vertically
                availableMoves.push(Square.at(i, location.col));
            }
            if (i!==location.col) {// horizontally
                availableMoves.push(Square.at(location.row, i));
            }    
        }
        return availableMoves;
    }
}