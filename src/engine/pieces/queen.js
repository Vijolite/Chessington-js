import Piece from './piece';
//import Player from '../player';
import Square from '../square';
// import Bishop from './bishop';
// import Rook from './rook';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];

        // const bishop = new Bishop();
        // board.setPiece(Square.at(location.row, location.col), bishop);
        // const moves_B = bishop.getAvailableMoves(board);
        // const rook = new Rook();
        // board.setPiece(Square.at(location.row, location.col), rook);
        // const moves_R = bishop.getAvailableMoves(board);
        //availableMoves=moves_B.concat(moves_R);

        // availableMoves=bishop.getAvailableMoves(board).concat(rook.getAvailableMoves(board));



        //from bishop 
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

        //from rook
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