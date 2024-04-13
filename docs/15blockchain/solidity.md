---
title: Apuntes de Solidity
sidebar_label: "Apuntes de Solidity"
sidebar_position: 1
---

# Apuntes de Solidity

## Introducción a Smart Contracts con Solidity (Ethereum, Polygon, BSC)
### Construcción de un Smart Contracts
1. Ir a [REMIX IDE](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js)
2. Crear un nuevo archivo dentro de la carpeta de contrato y llamarlo **example.sol**:
    ```sol title="default_workspace/contracts/example.sol"
    pragma solidity ^0.8.12;

    contract Example {
        uint number;
        address owner; // variable de protección del propietario del contrato

        constructor () {
            owner = msg.sender;
        }

        modifier onlyOwner {
            require(owner == msg.sender, "ERROR: Solo el propietario puede ejecutar esta accion");
            _;
        }

        function setNumber(uint x) public onlyOwner {
            // require(owner == msg.sender, "ERROR: Solo el propietario puede ejecutar esta accion");
            number = x;
        }

        function getNumber() public view returns(uint) {
            return number;
        }

        /*
        // Función que recepciona Criptomoneda
        function invitemeaCoffee() public payable {
            require(msg.value == 7777);
        }
        */
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
### Tipos de datos
1. Crear un nuevo archivo dentro de la carpeta de contrato y llamarlo **examplesTypes.sol**:
    ```sol title="default_workspace/contracts/examplesTypes.sol"
    // 5POX-License-Identifier: GPL-3.0
    pragma solidity ^0.8.12;

    // uint256: Entero sin signo
    // bool: Valor booleano
    // mapping: Estructura clave valor
    contract example {
        uint256 amount = 1;
        uint256 decimals = 18;
        uint256 result = amount * 10**decimals;

        mapping(address => uint256) private balances;

        function getBalance(address addr_) public view returns(uint256) {
            return balances[addr_];
        }

        function setBalance(address addr_, uint value_) public returns(bool) {
            balances[addr_] = value_;
            return true;
        }
    }
    ```


