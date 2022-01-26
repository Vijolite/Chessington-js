import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Bishop from '../../../src/engine/pieces/bishop';

describe('Bishop', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move diagonally', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 5), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(1, 6), Square.at(0, 7), Square.at(3, 4), Square.at(4, 3), Square.at(5, 2), Square.at(6, 1), Square.at(7, 0),
            Square.at(1, 4), Square.at(0, 3), Square.at(3, 6), Square.at(4, 7)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('top left corner', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(7, 0), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(6, 1), Square.at(5, 2), Square.at(4, 3), Square.at(3, 4), Square.at(2, 5), Square.at(1, 6), Square.at(0, 7)
        ];

        moves.should.deep.include.members(expectedMoves);
    });
   

    it('cannot make any other moves', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 5), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(11);
    });
});
