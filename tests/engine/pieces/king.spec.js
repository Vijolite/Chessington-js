import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import King from '../../../src/engine/pieces/king';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move one square to any direction', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 5), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(2, 4), Square.at(2, 6), Square.at(1, 5), Square.at(3, 5), Square.at(1, 4), Square.at(3, 4), Square.at(3, 6),Square.at(1, 6)
           
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('top edge', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(7, 5), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(7, 4), Square.at(7, 6), Square.at(6, 4), Square.at(6, 5), Square.at(6, 6)
           
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('corner', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(7, 0), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(6, 0), Square.at(7, 1), Square.at(6, 1)
           
        ];

        moves.should.deep.include.members(expectedMoves);
    });


    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 5), king);

        const moves = king.getAvailableMoves(board);

        moves.should.have.length(8);
    });
});
