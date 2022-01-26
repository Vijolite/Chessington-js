import Piece from './piece';
//import Player from '../player';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];

        // for (let i=1; i<8; i++) {    
        //     if (location.col+i<8 && location.row+i<8) // diagonally up right
        //         availableMoves.push(Square.at(location.row+i,location.col+i));
        //     if (location.col-i>=0 && location.row+i<8) // diagonally up left
        //         availableMoves.push(Square.at( location.row+i,location.col-i,));
        //     if (location.col-i>=0 && location.row-i>=0) // diagonally down left
        //         availableMoves.push(Square.at(location.row-i,location.col-i));
        //     if (location.col+i<8 && location.row-i>=0) // diagonally down right
        //         availableMoves.push(Square.at( location.row-i,location.col+i));
        // }

        for (let i=1; i<8; i++) {    
            if (Square.is_valid(location.row+i,location.col+i)) // diagonally up right
                availableMoves.push(Square.at(location.row+i,location.col+i));
            if (Square.is_valid( location.row+i,location.col-i)) // diagonally up left
                availableMoves.push(Square.at( location.row+i,location.col-i));
            if (Square.is_valid(location.row-i,location.col-i)) // diagonally down left
                availableMoves.push(Square.at(location.row-i,location.col-i));
            if (Square.is_valid( location.row-i,location.col+i)) // diagonally down right
                availableMoves.push(Square.at( location.row-i,location.col+i));
        }
        
        return availableMoves;
    }
}