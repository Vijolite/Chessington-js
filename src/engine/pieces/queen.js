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

        return availableMoves;
    }
}