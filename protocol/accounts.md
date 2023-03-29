# Accounts

Nimiq 2.0 has four different account types, each with its unique features and purposes.

- Basic
- HTLC (Hashed Timelock Contract)
- Vesting contract
- Staking contract

<br/>

Users can operate with their accounts and interact with the blockchain through [TODO transactions](https://nimiq.com). Each account has a unique address.

<br/>

### **Basic account**

With a basic account, users can send and receive NIM and have a balance. The account is controlled with a private key unique to the user. This type of account is similar to a bank account with an address, a balance, and a key. Once a user sends or receives NIM, the balance is updated. A basic account is created once any user sends NIM to an inexistent address.

<br/>

### **HTLC**

A HTLC is a conditional payment implemented by a script in the blockchain. It's a smart contract that enables a party to transfer assets to another party without relying on a third one. The contract acts as the escrow party for both sender and recipient.

<br/>

HTLC structure:

| Data field       | Description                                                                                                                                                                                     |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `balance`        | The amount of NIM at any given time. It can differ from the `total_amount` since it’s possible to withdraw partial amounts at a time.                                                           |
| `sender`         | The sender’s address.                                                                                                                                                                           |
| `recipient`      | The recipient’s address.                                                                                                                                                                        |
| `hash_algorithm` | The algorithm used for the hash function.                                                                                                                                                       |
| `hash_root`      | The hash of the `pre_image` - secret key.                                                                                                                                                       |
| `hash_count`     | The number of times the `pre_image` is hashed so the recipient can withdraw the funds entirely. If the `hash_count` is 2, the recipient can withdraw the funds in 2 portions.                   |
| `timeout`        | The time, in Unix time with millisecond precision, when the contract elapses. The `timeout` is determined once the contract is created. If the time elapses, the sender can withdraw the funds. |
| `total_amount`   | The initial amount decided in the contract creation.                                                                                                                                            |

<br/>

Anyone can create a HTLC whose structural values are static (decided by the contract owner) besides the balance, which changes every time NIM is withdrawn. Also, once the HTLC is created, no NIM can be added to the contract.

<br/>

There are three different transactions to unlock the funds, and each one results in a new balance on the HTLC:

1. **Timeout resolve**: After the timeout elapses, the sender can redeem the funds.
2. **Regular transfer**: The recipient can withdraw the funds entirely or partially before the `timeout` elapses. Supposing that the `hash_count` is three, the contract owner can present a hash that was rehashed two times resulting in the `hash_root` and then withdraw two-thirds of the funds. The owner can also present the `pre_image` and withdraw the `total_amount` immediately.
3. **Early resolve**: When both sender and recipient sign the transaction the funds can be withdrawn at any time.

<br/>

### **Vesting contract**

The vesting contract allows a user to lock funds for a period of time and unlock them in a predefined timetable. This contract locks the funds of a single user (the contract owner), and it can unlock the funds in predefined portions.

<br/>

Vesting contract structure:

| Data field     | Description                                                                                                                                          |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `balance`      | The amount of NIM at any given time. Whenever the funds are spent, the balance changes.                                                              |
| `owner`        | The owner's address. The contract owner has a corresponding key to sign and withdraw the funds.                                                      |
| `start_time`   | The time, in Unix time with millisecond precision, when the vesting schedule starts, decided by the contract owner.                                  |
| `time_step`    | The `step_amount` unlocks at each `time_step`. If the owner decides to unlock the funds every 24 hours, the `step_amount` unlocks at every 24 hours. |
| `step_amount`  | The amount of NIM unlocked in every `time_step`.                                                                                                     |
| `total_amount` | The initial amount decided in the contract creation.                                                                                                 |

<br/>

These values are static, except for the balance, which changes as the funds are withdrawn. The values are decided in the creation of the contract.

<br/>

The contract owner can interact with the contract whenever he desires but can only withdraw the partial amount of NIM decided when the `time_step` unlocks. The balance is then updated. Note that unlocking the funds is a predefined action, and it happens at every `step_amount`. Yet withdrawing the funds is an owner’s action. Also, once the vesting contract is created, no NIM can be added to the contract.

<br/>

### **Staking contract**

The staking contract is a Nimiq 2.0 type of contract that allows nodes to be validators and stakers, thus being a part of the consensus. Any node with a wallet and stake in Nimiq's blockchain can propose to be a validator or a staker. For a detailed explanation about the staking contract, follow this [link](staking-contract.md) to read on validators, stakers, and their interactions with the staking contract.
