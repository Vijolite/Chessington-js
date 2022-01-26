export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }


    // static same_colour(board,sq) {
    //     return (board.getPiece(Square.at(r1, c1)).player===board.getPiece(Square.at(r2, c2)).player);
    // }

    same_colour(board,sq) {
        return (this.player === board.getPiece(sq).player);
    }

    // trimAvailableMoves(this, board){
    //     let availableMoves = this.getAvailableMoves(board)
    //     .filter(square => this.player !== board.getPiece(square).player);
    //     return availableMoves
    // }
    
}
