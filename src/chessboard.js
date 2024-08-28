import React from 'react'
import './App.css'
import { FaChessRook } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa";
import { FaChessQueen } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";

export default function Chessboard() 
{
  return (
    <div>
        <div className='section'>
            <div className='container'>
                <div className='row'>
                    <h1>Chessboard</h1>
                    <table >
        <tr>
            <td class="white1"><FaChessRook /></td>
            <td class="black1"><FaChessKnight /></td>
            <td class="white1"><FaChessBishop /></td>
            <td class="black1"><FaChessQueen /></td>
            <td class="white1"><FaChessKing /></td>
            <td class="black1"><FaChessBishop /></td>
            <td class="white1"><FaChessKnight /></td>
            <td class="black1"><FaChessRook /></td>
        </tr>
        <tr>
            <td class="black1"><FaChessPawn /></td>
            <td class="white1"><FaChessPawn /></td>
            <td class="black1"><FaChessPawn /></td>
            <td class="white1"><FaChessPawn /></td>
            <td class="black1"><FaChessPawn /></td>
            <td class="white1"><FaChessPawn /></td>
            <td class="black1"><FaChessPawn /></td>
            <td class="white1"><FaChessPawn /></td>

        </tr>
        <tr>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
        </tr>
        <tr>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>

        </tr>
        <tr>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
        </tr>
        <tr>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>
            <td class="black1"></td>
            <td class="white1"></td>

        </tr>
        <tr>
            <td class="white2"><FaChessPawn /></td>
            <td class="black2"><FaChessPawn /></td>
            <td class="white2"><FaChessPawn /></td>
            <td class="black2"><FaChessPawn /></td>
            <td class="white2"><FaChessPawn /></td>
            <td class="black2"><FaChessPawn /></td>
            <td class="white2"><FaChessPawn /></td>
            <td class="black2"><FaChessPawn /></td>
        </tr>
        <tr>
            <td class="black2"><FaChessRook /></td>
            <td class="white2"><FaChessKnight /></td>
            <td class="black2"><FaChessBishop /></td>
            <td class="white2"><FaChessQueen /></td>
            <td class="black2"><FaChessKing /></td>
            <td class="white2"><FaChessBishop /></td>
            <td class="black2"><FaChessKnight /></td>
            <td class="white2"><FaChessRook /></td>
        </tr>
    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
