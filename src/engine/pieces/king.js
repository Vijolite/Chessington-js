import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];
        if (location.row<7) availableMoves.push(Square.at(location.row+1, location.col));
        if (location.row>0) availableMoves.push(Square.at(location.row-1, location.col));
        if (location.col>0) availableMoves.push(Square.at(location.row, location.col-1));
        if (location.col<7) availableMoves.push(Square.at(location.row, location.col+1));
        if (location.row>0 && location.col>0) availableMoves.push(Square.at(location.row-1, location.col-1));
        if (location.row<7 && location.col>0) availableMoves.push(Square.at(location.row+1, location.col-1));
        if (location.row>0 && location.col<7) availableMoves.push(Square.at(location.row-1, location.col+1));
        if (location.row<7 && location.col<7) availableMoves.push(Square.at(location.row+1, location.col+1));

        // availableMoves.push(Square.at(location.row+1, location.col));
        // availableMoves.push(Square.at(location.row-1, location.col));
        // availableMoves.push(Square.at(location.row, location.col-1));
        // availableMoves.push(Square.at(location.row, location.col+1));
        // availableMoves.push(Square.at(location.row-1, location.col-1));
        // availableMoves.push(Square.at(location.row+1, location.col-1));
        // availableMoves.push(Square.at(location.row-1, location.col+1));
        // availableMoves.push(Square.at(location.row+1, location.col+1));

        
        return availableMoves;

    }
}