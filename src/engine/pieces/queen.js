import Piece from './piece';
import Player from '../player';
import Square from '../square';
import Bishop from './bishop';
import Rook from './rook';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let availableMoves=[];

        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(location.row, location.col), bishop);
        let moves_B = bishop.getAvailableMoves(board);
        const rook = new Rook(Player.WHITE);
        board.setPiece(Square.at(location.row, location.col), rook);
        let moves_R = rook.getAvailableMoves(board);
        availableMoves=moves_B.concat(moves_R);

        //availableMoves=bishop.getAvailableMoves(board).concat(rook.getAvailableMoves(board));

        // const bishop = new Bishop(Player.WHITE);
        // const rook = new Rook(Player.WHITE);
        // let l = board.findPiece(this);
        // // put bishop on the same square and get its moves
        // board.setPiece(Square.at(l.row, l.col), bishop);
        // let BishopMoves = bishop.getAvailableMoves(board);
        // // put rook on the same square and get its moves
        // board.setPiece(Square.at(l.row, l.col), rook);
        // let RookMoves = rook.getAvailableMoves(board);

        // //combine moves
        // let moves = RookMoves.concat(BishopMoves);
        // return moves;



        // //from bishop 
        // for (let i=1; i<8; i++) {    
        //     if (Square.is_valid(location.row+i,location.col+i)) // diagonally up right
        //         availableMoves.push(Square.at(location.row+i,location.col+i));
        //     if (Square.is_valid( location.row+i,location.col-i)) // diagonally up left
        //         availableMoves.push(Square.at( location.row+i,location.col-i));
        //     if (Square.is_valid(location.row-i,location.col-i)) // diagonally down left
        //         availableMoves.push(Square.at(location.row-i,location.col-i));
        //     if (Square.is_valid( location.row-i,location.col+i)) // diagonally down right
        //         availableMoves.push(Square.at( location.row-i,location.col+i));
        // }

        // //from rook
        // for (let i=0; i<8; i++) {           
        //     if (i!==location.row) {// vertically
        //         availableMoves.push(Square.at(i, location.col));
        //     }
        //     if (i!==location.col) {// horizontally
        //         availableMoves.push(Square.at(location.row, i));
        //     }    
        // }
        
        return availableMoves;
    }
}