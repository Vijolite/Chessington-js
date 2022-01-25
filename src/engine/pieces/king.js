// import Piece from './piece';

// export default class King extends Piece {
//     constructor(player) {
//         super(player);
//     }

//     getAvailableMoves(board) {
//         return new Array(0);
//     }
// }


import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        //let l = board.findPiece(this);

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

        // let moves = [
        //     Square.at(l.row+1, l.col-1), Square.at(l.row+1, l.col), Square.at(l.row+1, l.col+1),
        //         Square.at(l.row, l.col-1), Square.at(l.row, l.col+1),
        //     Square.at(l.row-1, l.col-1), Square.at(l.row-1, l.col), Square.at(l.row-1, l.col+1)
        // ]
        
        return availableMoves;
        //return moves;
    }
}