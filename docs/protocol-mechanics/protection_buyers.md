---
title: "Protection Buyers"
sidebar_position: 3
pagination_next: null
pagination_prev: null
hide_table_of_contents: false
toc_max_heading_level: 4
---

import styles from "../docs.module.css";


<br/>

Protection purchase on Carapace is oriented towards lenders of under-collateralized lending protocols e.g. Goldfinch, Maple, TrueFi, Clearpool and more. By buying protection, lenders can access risk adjusted yields while protecting their capital. 

Carapace protects a buyer from facing capital loss, in cases when a borrower defaults on a lending pool that is funded by the buyer. In such a scenario, a protection buyer is able to submit a claim to Carapace and if successful, they are provided with a payout up to the principal loss faced by them due to the default event. In return for this protection, protection buyers are required to pay a premium into the Carapace pool. 

## Key Benefits

### Comprehensive Protection

Protection of up to 100% in principal loss covered, in the event of lending pool default.

### Risk-Adjusted Yields

Risk-adjusted yields for protection buyers equals interest earned from underlying lending protocol minus premium paid for Carapace protection. When purchasing protection, buyers are assured of a risk-adjusted yield that includes protection in the event of loan default. This phenomenon brings more predictability towards an investor’s return 

Investors are also able to choose their target risk-adjusted yields based on required protection, thus supporting bespoke investment strategies, as buyers can choose what percentage of funds invested need to be protected e.g. 50%, 80% or 100% of amount to be protected

### Efficient premium pricing

Since Carapace is cross-protocol, protection sellers face a diversified level of risk across lending pools as well as across protocols. As Carapace grows, level of diversification and market liquidity grows which will lead to more efficient/lower premium pricing for the protection buyer.

### Enhanced Token Rewards

In addition to potential token rewards in underlying lending protocols, early protection buyers can also earn CARA token rewards. These participants can then either sell their tokens or invest them in decentralized exchanges (DEXes) to earn more yield. 

Token rewards of this nature provide enhanced yield to buyers beyond their risk adjusted return.

## Risks

### Insolvency

The primary risk for protection buyers is that there might not be sufficient capital available in a given pool to cover each claim in the event of default. See [Protocol Mechanics: General](https://www.carapace.finance/docs/protocol-mechanics/general) section for a detailed explanation on how Carapace mitigates this risk. 

### Other Risks 

Smart contract failure and Fraud are some of the other risks faced by a buyer. These risks and mitigants are covered in detail in the [Protocol Mechanics: Protection Sellers](https://www.carapace.finance/docs/protocol-mechanics/protection_sellers). 

## Buyer Qualifications

### Evidence of Lending Position

While purchasing protection, a user will need to hold LP (liquidity provider) tokens. 

A seller does not need to deposit the LP token in a Carapace pool at the time of purchase - this is only a requirement if a buyer makes a claim for default payout.

### Purchase Conditions

### Duration

Minimum protection duration = 90 days
Maximum protection duration = Up to end of the next cycle

### New Protection

A buyer can only buy new protection within 90 days after a lending pool is added to our pool. After that point, they will not be able to purchase protection. Existing lenders cannot buy protection anytime they want. Otherwise, they would buy protection right before the missed payment. Since credit default swaps exist to deal with uncertainty, we cannot allow them to buy when they are certain that a borrower is gonna default.

### Extension of Protection

A buyer is able to extend protection until the end of the next cycle. For example, in cycle 1, you buy protection up to the end of cycle 2. In cycle 2, you buy protection up to the end of cycle 3.

He must buy protection within the renewal allowance period after his protection expires to ensure that protection is maintained. If they fail to pay during the premium renewal window, they won't be able to purchase protection again. 

This design allows a buyer to assess insolvency risk on an ongoing basis. They can estimate how much seller capital will be available in the next cycle with confidence, given that a seller is required to lock up capital until the next cycle. 

Let’s use an example where the cycle duration is 90 days. Imagine that Buyer A buys protection at day 100 (cycle 2) for 170 days. She can see how much capital will stay during her protection duration (the remaining days in cycle 2 and all the days in cycle 3) from two pieces of information. First, all the capital deposited in cycle 2 will stay in cycle 3. Second, the amount of withdrawal requests made before cycle 1 (only in cycle 1 in this case). 

There is some risk that protection extension might fail in the event that the protection purchase breaches the leverage ratio floor. However, we expect this to be a rare event since a seller is incentivized to deposit capital when the leverage ratio is low.

### Transfer of Protection

Future versions of the protocol will allow for buyer positions to be transferred between two parties. However, the receiving party should be aware that they need to hold the LP tokens from the respective underlying protocol.

### Summary of Purchase Conditions

<ul className={styles.bulletpoints}>
  <li>The leverage ratio remains between the floor and ceiling limits after the transaction AND</li>
  <li>Protection duration is longer than 90 days AND</li>
  <li>Protection duration is shorter than the next cycle end AND</li>
  <li>New protection is being purchased within 90 days after a lending pool is added to a protection pool OR if protection is being extended, then the transaction needs to take place within the renewal allowance period</li>
  <li>An underlying lending pool payment is not in the late payment, grace period, or default</li>
</ul>




