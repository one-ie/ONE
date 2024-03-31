---
title: DBRX - Inside the Creation of the World’s Most Powerful Open Source AI Model
description: In a notable development within the AI sector, Databricks, a leading data science and AI company based in San Francisco, has achieved a significant milestone. This past Monday, a group of dedicated engineers and executives, connected through the digital corridors of Zoom, awaited the culmination of their relentless efforts on DBRX, a large language model poised to redefine the standards of artificial intelligence.
pubDate: 29 March 2024
coverImage: /blog-placeholder-3.jpg
category: AI
---

<img src="/images/blog/dbrx-vs-chat-infographic.png">

**A Quantum Leap in AI Performance**

The anticipation in the air was palpable as Jonathan Frankle, the chief neural network architect behind DBRX, prepared to unveil the fruits of their labor. The revelation that followed would echo throughout the corridors of the AI community:

> "We’ve surpassed everything," Jonathan Frankle, chief neural network architect at Databricks and leader of the team that built DBRX, eventually told the team, which responded with whoops, cheers, and applause emojis.


By eclipsing the performance of existing open-source models and even rivaling the capabilities of proprietary giants, DBRX set a new benchmark for large language models.

**A Triumph for Open Source**

The decision to release DBRX under an open-source license is a bold stride towards fostering an environment of collaboration and innovation within the AI sphere. This move not only challenges the prevailing norms of secrecy but also democratizes access to cutting-edge technology.

> Databricks will release DBRX under an open source license, allowing others to build on top of its work. Frankle shared data showing that DBRX was better than every other open source model available.


**The Odyssey of DBRX**

The journey to creating DBRX was fraught with challenges, each demanding a blend of technical acumen, strategic foresight, and sheer determination. From architectural considerations to data selection, every aspect of DBRX's development was meticulously crafted to achieve unparalleled efficiency and performance.

> “It's mind-boggling even for someone who's spent their life in computer science,” said Frankle, highlighting the complexity of coordinating thousands of computers to work together in training an AI model.


**Empowering Industries with AI**

Under the leadership of Ali Ghodsi, Databricks aspires to usher in a new era of data intelligence, where industries across the spectrum can leverage AI to unlock insights from their data without compromising on privacy or security.

> “We call it data intelligence—the intelligence to understand your own data,” says Ali Ghodsi. Databricks aims to empower companies in various industries with AI tools that respect data privacy and security.


**The Bedrock of AI: Quality Data**

At the heart of any AI model lies the data it's trained on. DBRX's superiority is not just a product of advanced algorithms but also a reflection of the meticulous attention paid to the quality and preparation of its training data.

> “Data quality, data cleaning, data filtering, data prep is all very important,” says Naveen Rao, a vice president at Databricks. “These models are really just a function of that. You can almost think of that as the most important thing for model quality.”


**Charting the Course for AI's Future**

The release of DBRX marks a pivotal moment in the evolution of AI. Beyond its immediate applications, DBRX serves as a beacon for the future, promising insights into the untapped potential of artificial intelligence.

> “The part that excites me the most is the science we get to do at this scale,” says Jonathan Frankle. The release of DBRX not only advances AI technology but also contributes to a deeper understanding of AI's capabilities and limitations.


**State-of-the-Art Quality and Performance**

This state-of-the-art quality comes with marked improvements in training and inference performance. DBRX advances the state-of-the-art in efficiency among open models thanks to its fine-grained mixture-of-experts (MoE) architecture. Inference is up to 2x faster than LLaMA2-70B, and DBRX is about 40% of the size of Grok-1 in terms of both total and active parameter-counts. When hosted on Mosaic AI Model Serving, DBRX can generate text at up to 150 tok/s/user. Our customers will find that training MoEs is also about 2x more FLOP-efficient than training dense models for the same final model quality. End-to-end, our overall recipe for DBRX (including the pretraining data, model architecture, and optimization strategy) can match the quality of our previous-generation MPT models with nearly 4x less compute.

<img src="/images/blog/dbrx-performance.png">

**Quality on Benchmarks vs. Leading Open Models**

| Model               | Open LLM Leaderboard | ARC-challenge 25-shot | HellaSwag 10-shot | MMLU 5-shot | Truthful QA 0-shot | WinoGrande 5-shot | GSM8k CoT 5-shot maj@13 | Gauntlet v0.34 | HumanEval5 0-Shot, pass@1 (Programming) |
|---------------------|----------------------|-----------------------|-------------------|-------------|---------------------|-------------------|-------------------------|----------------|-----------------------------------------|
| **DBRX Instruct**   | **74.5%**            | 68.9%                 | 89.0%             | **73.7%**   | 66.9%               | 81.8%             | **66.9%**               | **66.8%**      | **70.1%**                             |
| Mixtral Instruct    | 72.7%                | 70.1%                 | 87.6%             | 71.4%       | 65.0%               | 81.1%             | 61.1%                   | 60.7%          | 54.8%                                 |
| Mixtral Base        | 68.4%                | 66.4%                 | 86.5%             | 71.9%       | 46.8%               | 81.7%             | 57.6%                   | 56.8%          | 40.2%                                 |
| LLaMA2-70B Chat     | 62.4%                | 64.6%                 | 85.9%             | 63.9%       | 52.8%               | 80.5%             | 26.7%                   | 52.8%          | 32.2%                                 |
| LLaMA2-70B Base     | 67.9%                | 67.3%                 | 87.3%             | 69.8%       | 44.9%               | 83.7%             | 54.1%                   | 56.4%          | 31.0%                                 |
| Grok-11             | —                    | —                     | —                 | 73.0%       | —                   | —                 | 62.9% (8-shot)          | —              | 63.2%                                 |

*Table 1. Quality of DBRX Instruct and leading open models. Bolded and underlined is the highest score.*


