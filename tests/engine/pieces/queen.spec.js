
import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Queen from '../../../src/engine/pieces/queen';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move diagonally, vertically and horizontally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(2, 5), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(1, 6), Square.at(0, 7), Square.at(3, 4), Square.at(4, 3), Square.at(5, 2), Square.at(6, 1), Square.at(7, 0),
            Square.at(1, 4), Square.at(0, 3), Square.at(3, 6), Square.at(4, 7),
            // Horizontal
            Square.at(2, 0), Square.at(2, 1), Square.at(2, 2), Square.at(2, 3), Square.at(2, 4), Square.at(2, 6), Square.at(2, 7),
            // Vertical
            Square.at(0, 5), Square.at(1, 5), Square.at(3, 5), Square.at(4, 5), Square.at(5, 5), Square.at(6, 5), Square.at(7, 5)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

   

    it('cannot make any other moves', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(2, 5), queen);

        const moves = queen.getAvailableMoves(board);

        moves.should.have.length(11+14);
    });
});
