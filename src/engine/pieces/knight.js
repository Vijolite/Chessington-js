import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];

        if (Square.is_valid(location.row-2,location.col-1)) availableMoves.push(Square.at(location.row-2,location.col-1));
        if (Square.is_valid(location.row-1,location.col-2)) availableMoves.push(Square.at(location.row-1,location.col-2));
        if (Square.is_valid(location.row+2,location.col+1)) availableMoves.push(Square.at(location.row+2,location.col+1));
        if (Square.is_valid(location.row+1,location.col+2)) availableMoves.push(Square.at(location.row+1,location.col+2));

        if (Square.is_valid(location.row+2,location.col-1)) availableMoves.push(Square.at(location.row+2,location.col-1));
        if (Square.is_valid(location.row+1,location.col-2)) availableMoves.push(Square.at(location.row+1,location.col-2));
        if (Square.is_valid(location.row-2,location.col+1)) availableMoves.push(Square.at(location.row-2,location.col+1));
        if (Square.is_valid(location.row-1,location.col+2)) availableMoves.push(Square.at(location.row-1,location.col+2));

        //filter capturing same colour pieces    
        availableMoves = availableMoves.filter(square => {
            if (board.getPiece(square)){
                if (!this.same_colour(board,square)) {
                    return square;
                }
            } else return square;
        });
        
        return availableMoves;

    }
}