
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.7.1/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that <...>",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        // arrange: set up the chain, state, and other required elements
        let wallet_1 = accounts.get("wallet_1")!;
        let sender = accounts.get("deployer")!.address;

        // act: perform actions related to the current test
/*        
        let block = chain.mineBlock([
            Tx.contractCall("samplecontract", "hello-world", [], sender)
            /*
             * Add transactions with:
             * Tx.contractCall(...)
            */
        /*
        ]);
        */
        /*
        console.log(block);
        let inner = block.receipts[0].result.expectOk();
        let tuple: any = inner.expectTuple();
        tuple["msg"].expectAscii("Hello World");
        tuple["tip"].expectUint(1);
        tuple["sender"].expectPrincipal("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM");
        */

        // assert: review returned data, contract state, and other requirements
     /*   assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);
        */

        // TODO
        // assertEquals("TODO", "a complete test");
    },
});
