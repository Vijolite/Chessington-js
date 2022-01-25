// import Piece from './piece';

// export default class Bishop extends Piece {
//     constructor(player) {
//         super(player);
//     }

//     getAvailableMoves(board) {
//         return new Array(0);
//     }
// }

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

        for (let i=1; i<8; i++) {    
            if (location.col+i<8 && location.row+i<8) // diagonally up right
                availableMoves.push(Square.at(location.row+i,location.col+i));
            if (location.col-i>=0 && location.row+i<8) // diagonally up left
                availableMoves.push(Square.at( location.row+i,location.col-i,));
            if (location.col-i>=0 && location.row-i>=0) // diagonally down left
                availableMoves.push(Square.at(location.row-i,location.col-i));
            if (location.col+i<8 && location.row-i>=0) // diagonally down right
                availableMoves.push(Square.at( location.row-i,location.col+i));
            
            
            // availableMoves.push(Square.at(location.row+i,location.col+i));
        
            // availableMoves.push(Square.at( location.row+i,location.col-i,));
        
            // availableMoves.push(Square.at(location.row-i,location.col-i));
        
            // availableMoves.push(Square.at( location.row-i,location.col+i));
        }
        
        return availableMoves;
    }
}