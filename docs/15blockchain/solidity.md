---
title: Apuntes de Solidity
sidebar_label: "Apuntes de Solidity"
sidebar_position: 1
---

# Apuntes de Solidity

## Introducci`n a Smart Contracts con Solidiy (Ethereum, Polygon, BSC)
1. Ir a [REMIX IDE](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js)
2. Crear un nuevo archivo dentro de la carpeta de contrato y llamarlo **example.sol**:
    ```sol title="default_workspace/contracts/example.sol"
    pragma solidity ^0.8.12;

    contract Example {
        uint number;

        function setNumber(uint x) public {
            number = x;
        }

        function getNumber() public view returns(uint) {
            return number;
        }
    }    
    ```
3. Compilar contrato:
    + Ir a **Solidity compiler**.
    + Seleccionar la versión de **Solidity** especificada (^0.8.12).
    + Clic en el botón **Compile example.sol**.
4. Desplegar controto:
    + Ir a **Deploy & run transactions**.
    + Clic en **Deploy**.
    + Probar contrato en: EXAMPLE AT X0xd9145CCE52D386f254917e481eB44e9943F39138




