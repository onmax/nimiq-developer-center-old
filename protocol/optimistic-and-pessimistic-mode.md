# Optimistic and pessimistic mode

Note: the blue text will have links to the respective subjects.

Albatross has two modes for consensus: optimistic and pessimistic mode. The optimistic mode considers that all validators are honest and won't misbehave. But, the pessimistic mode considers having misbehaving validators.

**Optimistic mode** - Considering all validators are rational and don’t attempt to tamper with the blockchain, we demonstrate how the validators would perform to produce and propose blocks:

1. In every new epoch, a new validator list is selected randomly. Validators are chosen proportionally to their stake. The higher the stake, the higher the probability of owning more [slots](Slots%2073881ed12bb340cb93e8ed82950dde11.md).
2. Using a [VRF seed](Verifiable%20Random%20Functions%2070d76d3016f1464aa21d5a764f8583cb.md) present in every block, a validator is chosen to produce the next micro block.
3. The validator chooses which transactions to include in the micro block and produces the new VRF seed that will be used to select the next validator slot.
4. This validator includes the transactions, updates the current state, adds the new VRF seed in the micro block, signs, and broadcasts it.
5. This process repeats in every micro block produced until the end of the batch, where a macro block is proposed, marking the end of the batch or epoch.
6. The macro block leader is selected with the VRF seed present in the previous micro block.
7. The macro block leader proposes a new macro block that doesn’t include any transactions. If the macro block marks the end of a batch, the validators list remains the same. If the macro block marks the end of an epoch, a new validator list is selected with a VRF seed.
8. To accept a macro block, the block leader and the rest of the validators list must sign the proposal and broadcast it.

**Pessimist mode** - We can also anticipate that some validators can maliciously behave. Validators that act maliciously get punished. Nimiq 2.0 blockchain is inspired by the BFT algorithm, so it tolerates up to one-third of the validators misbehaving. Even considering this case, we can still achieve a decent block production performance. Next, we explain how to achieve the expected performance with malicious validators on:

- Micro blocks: Each micro block is produced by a selected validator. Malicious validators can tamper with the blockchain by:
    - Attempting to fork the chain. In this case, as soon as a rational validator notices the fork, it can submit a [fork proof](Fork%20proofs%2033a1b9a0485a448b8bacdf6e11e13e6b/Fork%20proofs%20(previous%20version)%20f843201234a34c2c834fa46e5460f79d.md). The malicious validator is punished once this fork proof is sent to the network.
    - Delaying the micro block production. A rational validator can sign a skip block [](View%20change%20protocol%20fadf4240058944c4a48b72e5b9b30de1.md)message and wait for 2*f*+1 signatures. As soon as the skip blocks receive 2*f*+1 signatures, a validator from the validator list can add this block. The delayed validator is then punished.
    - Producing an invalid micro block. Given this case, the rest of the validator list can ignore the invalid micro block.

In either case, the malicious validators are punished according to the [punishment](Punishments%20db3044882bd24830897b60a0a99bfab0.md) rules of Albatross.

- Macro blocks: Macro blocks have finality, meaning that they are forkless. Yet, the elected leader can fail with the macro block proposal. There are two ways to attempt to tamper with macro blocks:
    - Failing to make a macro block proposal. If a validator doesn’t propose a macro block in the expected time, [Tendermint](Tendermint%20protocol%2022c7bfb4c7924ae78f57e1db9039c95c.md) has its procedure to select a new macro block leader.
    - Creating an invalid proposal. Tendermint ignores invalid proposals. Therefore, a new validator is elected as the macro block leader if the timeout to send a proposal passes. Note that, even if the macro block leader sends an invalid proposal, once a valid one is sent, the invalid proposal is ignored, and the valid one can be accepted.