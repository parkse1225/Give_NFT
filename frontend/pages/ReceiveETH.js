// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3';
// import contractAbi from './contractAbi.json';

// // 스마트 컨트랙트 주소
// const contractAddress = '0xb573109d0e1F12eA5e3AAdF829Cd265475A879E4';

// export default function MyComponent() {
//   const [web3, setWeb3] = useState(null);
//   const [account, setAccount] = useState('');

//   useEffect(() => {
//     // 페이지 로드 시 실행되는 부분
//     async function connectToMetaMask() {
//       if (typeof window.ethereum !== 'undefined') {
//         // MetaMask가 설치되어 있는 경우
//         try {
//           await window.ethereum.request({ method: 'eth_requestAccounts' });
//           const web3Instance = new Web3(window.ethereum);
//           setWeb3(web3Instance);
//         } catch (error) {
//           console.error(error);
//         }
//       } else {
//         // MetaMask가 설치되어 있지 않은 경우
//         console.log('MetaMask를 설치하세요.');
//       }
//     }

//     connectToMetaMask();
//   }, []);

//   // 출금하기
//   async function withdraw() {
//     if (web3) {
//       try {
//         const accounts = await web3.eth.getAccounts();
//         console.log('연결된 계정:', accounts[0]);
//         setAccount(accounts[0]);

//         // 스마트 컨트랙트 인스턴스 생성
//         const contract = new web3.eth.Contract(contractAbi, contractAddress);

//         // 출금 실행
//         const result = await contract.methods.withdraw().send({ from: accounts[0] });
//         console.log('출금 결과:', result);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       console.log('MetaMask에 연결되지 않았습니다.');
//     }
//   }

//   return (
//     <div>
//       <h1>Withdraw</h1>
//       <button onClick={withdraw}>출금하기</button>
//     </div>
//   );
// }