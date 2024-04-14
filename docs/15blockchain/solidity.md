---
title: Apuntes de Solidity
sidebar_label: "Apuntes de Solidity"
sidebar_position: 1
---

# Apuntes de Solidity

## Introducción a Smart Contracts con Solidity (Ethereum, Polygon, BSC)
### Construcción de un Smart Contracts
1. Ir a [REMIX IDE](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js)
2. Crear un nuevo archivo dentro de la carpeta de **contracts** y llamarlo **example.sol**:
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
1. Crear un nuevo archivo dentro de la carpeta de **contracts** y llamarlo **examplesTypes.sol**:
    ```sol title="default_workspace/contracts/examplesTypes.sol"
    // SPDX-License-Identifier: GPL-3.0
    pragma solidity ^0.8.12;

    // uint256: Entero sin signo
    // address: Propietario de un contrato
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
### Comunicación entre Smart Contracts
1. Crear un nuevo archivo dentro de la carpeta de **contracts** y llamarlo **examplesTypes.sol**:
    ```sol title="default_workspace/contracts/Randomize.sol"
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.7;

    contract Randomize {
        function getRandomNumber() external view returns(uint256) {
            return block.timestamp % 9;
        }
    }
    ```
2. Crear un nuevo archivo dentro de la carpeta de **contracts** y llamarlo **examplesTypes.sol**:
    ```sol title="default_workspace/contracts/UseRandomize.sol"
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.7;

    interface IRandomize {
        function getRandomNumber() external view returns(uint256);
    }

    contract UsingRandomize {
        function useRandomize(address contractAddress_) public view returns(uint256) {
            IRandomize randomize = IRandomize(address(contractAddress_));
            return randomize.getRandomNumber();
        }
    }
    ```
### Crear un token
+ Código del standar ERC20: https://github.com/JJRuizDeveloper/solidity
```sol title="solidity/NFT.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PixlNFT is ERC721URIStorage { 

    using Counters for Counters.Counter; 
    Counters.Counter private _tokenIds;

    constructor() ERC721("ExampleNFT", "ENFT") {
    }

    function createToken(string memory tokenURI) public payable returns (uint) {
        require(msg.value >= 1000000000000000000, "Not enough EHT sent; check price!");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
```

```sol title="solidity/token.sol"
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.12;

interface IERC20 {   
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

pragma solidity 0.8.12;

interface IERC20Metadata is IERC20 {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint256);
}

pragma solidity 0.8.12;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this; // silence state mutability warning without generating bytecode
        return msg.data;
    }
}

pragma solidity 0.8.12;

contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowances;
    uint256 private _totalSupply;
    uint256 private _decimals;
    string private _name;
    string private _symbol;
    address private _owner;

    constructor (string memory name_, string memory symbol_,uint256 initialBalance_,uint256 decimals_) {
        _name = name_;
        _symbol = symbol_;
        _totalSupply = initialBalance_* 10**decimals_;
        _balances[msg.sender] = _totalSupply;
        _decimals = decimals_;
        _owner = msg.sender;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    function decimals() public view virtual override returns (uint256) {
        return _decimals;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(sender, recipient, amount);

        uint256 currentAllowance = _allowances[sender][_msgSender()];
        require(currentAllowance >= amount, "Transfer amount exceeds allowance");
        _approve(sender, _msgSender(), currentAllowance - amount);

        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);
        return true;
    }
   
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        uint256 currentAllowance = _allowances[_msgSender()][spender];
        require(currentAllowance >= subtractedValue, "Decreased allowance below zero");
        _approve(_msgSender(), spender, currentAllowance - subtractedValue);

        return true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), "Transfer from the zero address");
        require(recipient != address(0), "Transfer to the zero address");

        uint256 senderBalance = _balances[sender];
        require(senderBalance >= amount, "Transfer amount exceeds balance");

        _balances[sender] = senderBalance - amount;
        _balances[recipient] += amount;

        emit Transfer(sender, recipient, amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal virtual {
        require(owner != address(0), "Approve from the zero address");
        require(spender != address(0), "Approve to the zero address");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /*function mint(uint256 amount) public returns(bool) {
        require(msg.sender == _owner, "Only the owner can mint new tokens");
        _totalSupply += amount;
        _balances[_owner] += amount;
        emit Transfer(address(0), _owner, amount);
        return true;
    }

    function burn(uint256 amount) public returns(bool) {
        require(_balances[msg.sender] >= amount, "Amount exceeded");
        _totalSupply -= amount;
        _balances[msg.sender] -= amount;
        emit Burn(msg.sender, amount);
        return true;
    }*/
}

pragma solidity ^0.8.0;

contract MyToken is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 decimals_,
        uint256 initialBalance_,
        address payable feeReceiver_
    ) payable ERC20(name_, symbol_,initialBalance_,decimals_) {
        payable(feeReceiver_).transfer(msg.value);
    }
}
```
1. Crear un nuevo archivo dentro de la carpeta de **contracts** y llamarlo **mytoken.sol**, en el copiar el código del standar ERC20 **token.sol** y compilarlo, desplegarlo y probarlo.

:::tip Despliegue
Para el despliegue proporcionar los siguientes valores:
NAME_: ejemplo
SYMBOL_: tkn
DECIMALS_: 18
INITIALBALANCE_: 10000
FEERECEIVER_: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 (Dirección del dueño del contrato) 
:::
:::tip Pruebas
Para las pruebas comenzar en este orden:
+ balanceOf: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
+ name
+ symbol
+ totalSupply
+ decimals
:::

:::tip Hacer una transferencia
+ recipient: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
+ amount: 1000
:::
