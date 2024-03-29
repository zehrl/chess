import Head from 'next/head';
import Image from 'next/image';
import whitePawn from '../public/pieces/white-pawn.png';
import whiteRook from '../public/pieces/white-rook.png';
import whiteKnight from '../public/pieces/white-knight.png';
import whiteBishop from '../public/pieces/white-bishop.png';
import whiteQueen from '../public/pieces/white-queen.png';
import whiteKing from '../public/pieces/white-king.png';
import blackPawn from '../public/pieces/black-pawn.png';
import blackRook from '../public/pieces/black-rook.png';
import blackKnight from '../public/pieces/black-knight.png';
import blackBishop from '../public/pieces/black-bishop.png';
import blackQueen from '../public/pieces/black-queen.png';
import blackKing from '../public/pieces/black-king.png';
import { useEffect, useState } from 'react';

export default function Home() {
  const [grabbedPiece, setGrabbedPiece] = useState(null);
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const [pieceStates, setPieceStates] = useState({
    whiteRook1: { inPlay: true, rank: "A", file: "1", component: <Piece altText='white rook' image={whiteRook} pieceName='whiteRook1' setGrabbedPiece={setGrabbedPiece} /> },
    whiteKnight1: { inPlay: true, rank: "B", file: "1", component: <Piece altText='white rook' image={whiteKnight} pieceName='whiteKnight1' setGrabbedPiece={setGrabbedPiece} /> },
    whiteBishop1: { inPlay: true, rank: "C", file: "1", component: <Piece altText='white rook' image={whiteBishop} pieceName='whiteBishop1' setGrabbedPiece={setGrabbedPiece} /> },
    whiteQueen1: { inPlay: true, rank: "D", file: "1", component: <Piece altText='white rook' image={whiteQueen} pieceName='whiteQueen1' setGrabbedPiece={setGrabbedPiece} /> },
    whiteKing1: { inPlay: true, rank: "E", file: "1", component: <Piece altText='white rook' image={whiteKing} pieceName='whiteKing1' setGrabbedPiece={setGrabbedPiece} /> },
    whiteBishop2: { inPlay: true, rank: "F", file: "1", component: <Piece altText='white rook' image={whiteBishop} pieceName='whiteBishop2' setGrabbedPiece={setGrabbedPiece} /> },
    whiteKnight2: { inPlay: true, rank: "G", file: "1", component: <Piece altText='white rook' image={whiteKnight} pieceName='whiteKnight2' setGrabbedPiece={setGrabbedPiece} /> },
    whiteRook2: { inPlay: true, rank: "H", file: "1", component: <Piece altText='white rook' image={whiteRook} pieceName='whiteRook2' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn1: { inPlay: true, rank: "A", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn1' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn2: { inPlay: true, rank: "B", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn2' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn3: { inPlay: true, rank: "C", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn3' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn4: { inPlay: true, rank: "D", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn4' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn5: { inPlay: true, rank: "E", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn5' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn6: { inPlay: true, rank: "F", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn6' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn7: { inPlay: true, rank: "G", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn7' setGrabbedPiece={setGrabbedPiece} /> },
    whitePawn8: { inPlay: true, rank: "H", file: "2", component: <Piece altText='white pawn' image={whitePawn} pieceName='whitePawn8' setGrabbedPiece={setGrabbedPiece} /> },
    blackRook1: { inPlay: true, rank: "A", file: "8", component: <Piece altText='black rook' image={blackRook} pieceName='blackRook1' setGrabbedPiece={setGrabbedPiece} /> },
    blackKnight1: { inPlay: true, rank: "B", file: "8", component: <Piece altText='black rook' image={blackKnight} pieceName='blackKnight1' setGrabbedPiece={setGrabbedPiece} /> },
    blackBishop1: { inPlay: true, rank: "C", file: "8", component: <Piece altText='black rook' image={blackBishop} pieceName='blackBishop1' setGrabbedPiece={setGrabbedPiece} /> },
    blackQueen1: { inPlay: true, rank: "D", file: "8", component: <Piece altText='black rook' image={blackQueen} pieceName='blackQueen1' setGrabbedPiece={setGrabbedPiece} /> },
    blackKing1: { inPlay: true, rank: "E", file: "8", component: <Piece altText='black rook' image={blackKing} pieceName='blackKing1' setGrabbedPiece={setGrabbedPiece} /> },
    blackBishop2: { inPlay: true, rank: "F", file: "8", component: <Piece altText='black rook' image={blackBishop} pieceName='blackBishop2' setGrabbedPiece={setGrabbedPiece} /> },
    blackKnight2: { inPlay: true, rank: "G", file: "8", component: <Piece altText='black rook' image={blackKnight} pieceName='blackKnight2' setGrabbedPiece={setGrabbedPiece} /> },
    blackRook2: { inPlay: true, rank: "H", file: "8", component: <Piece altText='black rook' image={blackRook} pieceName='blackRook2' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn1: { inPlay: true, rank: "A", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn1' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn2: { inPlay: true, rank: "B", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn2' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn3: { inPlay: true, rank: "C", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn3' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn4: { inPlay: true, rank: "D", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn4' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn5: { inPlay: true, rank: "E", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn5' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn6: { inPlay: true, rank: "F", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn6' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn7: { inPlay: true, rank: "G", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn7' setGrabbedPiece={setGrabbedPiece} /> },
    blackPawn8: { inPlay: true, rank: "H", file: "7", component: <Piece altText='black pawn' image={blackPawn} pieceName='blackPawn8' setGrabbedPiece={setGrabbedPiece} /> }

  });

  // useEffect(() => {
  //   console.log('pieceStates updated: ', pieceStates);
  // }, [pieceStates])

  // useEffect(() => {
  //   console.log('grabbedPiece updated: ', grabbedPiece);
  // }, [grabbedPiece])

  const handleDragOver = (event) => {
    event.preventDefault()
    setHoveredSquare(event.target.id);
  }

  const handleDrop = (event) => {
    event.preventDefault();

    // The target piece or square
    const id = event.target.id;

    if (!!id && grabbedPiece !== id) { // the target is not itself

      // If we moved our piece to an occupied square
      if (Object.keys(pieceStates).includes(event.target.id)) {
        // Get target piece's rank & file
        const rank = pieceStates[id].rank; // horizontal
        const file = pieceStates[id].file; // vertical

        // Set captured piece to captured
        setPieceStates(pieceStates => ({ ...pieceStates, [id]: { ...pieceStates[id], inPlay: false } }));

        // Update moved piece
        setPieceStates(pieceStates => ({ ...pieceStates, [grabbedPiece]: { ...pieceStates[grabbedPiece], rank: rank, file: file } }));

      } else { // Piece was moved to an open square
        const rank = id.split("")[0];
        const file = id.split("")[1];
        setPieceStates(pieceStates => ({ ...pieceStates, [grabbedPiece]: { ...pieceStates[grabbedPiece], rank: rank, file: file } }));
      }

    }
  }

  const possibleFiles = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const Files = possibleFiles.map(fileNumber => {
    const possibleRanks = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const squares = possibleRanks.map(rank => {
      // Check each possible piece
      // TODO: once we find the piece, we don't have to filter anymore. Maybe check if there's a function that stops once the object is found?
      const piece = Object.keys(pieceStates).filter(pieceKey => {
        const pieceState = pieceStates[pieceKey];
        return (
          `${pieceState.rank}${pieceState.file}` === `${rank}${fileNumber}`
          && pieceState.inPlay === true
        );
      });

      let pieceComponent = null
      if (typeof piece !== undefined && piece.length !== 0) {
        pieceComponent = pieceStates[piece].component;
      }

      return <Square
        hovered={`${rank}${fileNumber}`===hoveredSquare}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        id={`${rank}${fileNumber}`}
        key={`${rank}${fileNumber}`}
      >{pieceComponent}</Square>
    })
    return <File key={`file-${fileNumber}`} file={fileNumber} pieceStates={pieceStates}>{squares}</File>;
  })

  return (
    <>
      <main>
        <div id='chess-board'>
          {Files}
        </div>
      </main>
    </>
  )
}

function File(props) {
  return (
    <div className='file'>
      {props.children}
    </div>
  )
}

function Piece(props) {
  const pieceName = props.pieceName;
  const setGrabbedPiece = props.setGrabbedPiece;
  const altText = props.altText;

  const handleDragEnd = (event) => {
  }

  const handleDragStart = (event) => {
    event.dataTransfer.effectAllowed = "move";
    setGrabbedPiece(pieceName);
  }

  return (
    <Image
      className={`piece grab`}
      src={props.image}
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      alt={altText}
      id={pieceName}
    />
  )
}

function Square(props) {
  const hovered = props.hovered;
  const handleDragOver = props.handleDragOver;
  const handleDrop = props.handleDrop;
  const id = props.id;

  return (
    <div
      className={`square${hovered ? ' hovered' : ''}`}
      id={id}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >{props.children}</div>
  )
}