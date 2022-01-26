import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Pawn', () => {

    describe('white pawns', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move one square up if they have already moved', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 0), pawn);
            pawn.moveTo(board, Square.at(2, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(3, 0));
        });

        it('can move one or two squares up on their first move', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
        });

        it('cannot move forward if something is in front of it', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 5), pawn2);

            const moves = pawn.getAvailableMoves(board);            
            moves.should.have.length(0);
        });

        it('should be able to capture diagonally opponent\'s piece', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.BLACK);
            board.setPiece(Square.at(3, 4), pawn2);
            const pawn3 = new Pawn(Player.BLACK);
            board.setPiece(Square.at(3, 6), pawn3);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [Square.at(3, 4), Square.at(3, 6),  Square.at(3, 5)];

            moves.should.deep.include.members(expectedMoves);

        });

        it('should not capture diagonally its own piece', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 4), pawn2);
            const pawn3 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(3, 6), pawn3);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [Square.at(3, 5)];

            moves.should.deep.include.members(expectedMoves);
        });

    });

    describe('black pawns', () => {

        let board;
        beforeEach(() => board = new Board(Player.BLACK));    
        
        it('can only move one square down if they have already moved', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 0), pawn);
            pawn.moveTo(board, Square.at(5, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can move one or two squares down on their first move', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
        });

        it('cannot move forward if something is in front of it', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 5), pawn2);

            const moves = pawn.getAvailableMoves(board);            
            moves.should.have.length(0);
        });

        it('should be able to capture diagonally opponent\'s piece', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 4), pawn2);
            const pawn3 = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 6), pawn3);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [Square.at(1, 4), Square.at(1, 6),  Square.at(1, 5)];

            moves.should.deep.include.members(expectedMoves);

        });

        it('should not capture diagonally its own piece', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(2, 5), pawn);

            const pawn2 = new Pawn(Player.BLACK);
            board.setPiece(Square.at(1, 4), pawn2);
            const pawn3 = new Pawn(Player.BLACK);
            board.setPiece(Square.at(1, 6), pawn3);

            const moves = pawn.getAvailableMoves(board);

            const expectedMoves = [Square.at(1, 5)];

            moves.should.deep.include.members(expectedMoves);
        });

    });

});
