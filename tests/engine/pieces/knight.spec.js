import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Knight from '../../../src/engine/pieces/knight';

describe('Knight', () => {

    let board;
    beforeEach(() => board = new Board());

    it('Is making L shape moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(2, 5), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            
            Square.at(0, 4), Square.at(1, 3), Square.at(0, 6), Square.at(1, 7), Square.at(4, 4), Square.at(3, 3), Square.at(4, 6),Square.at(3, 7)
           
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('can handle corners correctly', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(0,7), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(1, 5),
            Square.at(2, 6)
        ]

        moves.should.deep.include.members(expectedMoves);
    });


    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(2, 5), knight);

        const moves = knight.getAvailableMoves(board);

        moves.should.have.length(8);
    });
});
