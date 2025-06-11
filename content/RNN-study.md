---
title: "RNN이란? : 순환 신경망의 구조와 학습 원리"
date: "2023-02-03"
category: "Study"
tags: ["AI", "DL"]     
summary: "RNN 이란 무엇일까?"
image: "images/rnn_structure.png"
---

# RNN 정의

<figure style="text-align: center;">
    <img src="images/ff_network.png" alt="RNN 구조" style="width: 60%; height: auto;">
    <figcaption>그림 1. Feed forward & RNN network</figcaption>
</figure>

- RNN은 순환 구조를 가진 DNN의 한 종류로 순차 데이터(시계열, 문장, 음성 등)를 처리, 분석할 수 있게 설계된 모델이다.  
- **RNN은 이전 상태를 기억**하고 **현재 계산에 반영**하며 시간적 의존성을 처리한다.

<div style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; font-weight: 500;">
- RNN은 <strong> 은닉 상태 </strong>라는 개념을 사용해 과거 데이터의 정보를 유지하며 현재 데이터를 처리하며 
<br>
이 <strong> 은닉 상태 </strong>를 업데이트하며 시간적 의존성을 학습한다.
</div>

---

# RNN 구조

## 수학적 구조

### 은닉 상태 업데이트 수식

$$
h_t = f(W_h h_{t-1} + W_x x_t + b_h)
$$

#### 출력 수식

$$
y_t = g(W_y h_t + b_y)
$$

#### 주요 용어

- $t$ (Timestep) : 현재 시점  
- $h_t$ (Hidden State) : 현재 시점의 은닉 상태  
- $h_{t-1}$ (Previous Hidden State) : 이전 시점의 은닉 상태  
- $x_t$ (Input at Time $t$) : 현재 시점의 입력  

- $W_h$ (Hidden-to-Hidden Weight Matrix) : 은닉 상태에서 은닉 상태로의 가중치 행렬  
- $W_x$ (Input-to-Hidden Weight Matrix) : 입력에서 은닉 상태로의 가중치 행렬  
- $W_y$ (Hidden-to-Output Weight Matrix) : 은닉 상태에서 출력으로의 가중치 행렬
- $b_h$ (Hidden Bias) : 은닉 상태의 편향 벡터  
- $b_y$ (Output Bias) : 출력 상태의 편향 벡터 

- $f$ : 활성화 함수로 보통 tanh를 사용  
- $g$ : 손실 함수로 분류 문제의 경우 Softmax, 회귀 문제일 경우 선형 함수 사용  

위 수식을 통해 이전 정보를 기억하며 은닉 상태를 업데이트하며 최종 출력을 내보낼 수 있다.

<div style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; font-weight: 500;">
  <strong>결국 RNN을 학습시킨다는 것은 전체 timestep에서 고정되어 있는 가중치 행렬들과 편향들을 조정하며 손실이 가장 적은 가중치 행렬을 도출하는 것이다.</strong>
</div>

--- 

# 그림과 함께 이해하기

<figure style="text-align: center;">
    <img src="images/rnn_structure.png" alt="RNN 구조" style="width: 100%; height: auto;">
    <figcaption>그림 2. RNN structure</figcaption>
</figure>

## 은닉 상태  

- 입력 $x_0$가 들어올 때 $h_0$는 다음과 같이 나타낼 수 있다.  

$$
h_0 = f(W_x {x_0} + b_h)
$$

- 한 번의 은닉 상태를 거친 후 입력 $x_1$가 들어올 때 $h_1$는 다음과 같이 나타낼 수 있다.  

$$
h_1 = f(W_h h_0 + W_x {x_1} + b_h)
$$

- 결국 최종 은닉 상태는 다음과 같이 표현할 수 있다.   

$$
h_t = f(W_h h_{t-1} + W_x {x_t} + b_h)
$$

### 출력  

- 입력 $x_0$가 들어올 때 $y_0$는 다음과 같이 나타낼 수 있다.  

$$
y_0 = g(W_y h_0 + b_y)
$$

- 입력 $x_1$가 들어올 때 $y_1$는 다음과 같이 나타낼 수 있다.  

$$
y_1 = g(W_y h_1 + b_y)
$$

- 결국 최종 출력 상태는 다음과 같이 표현할 수 있다.  

$$
y_t = g(W_y h_t + b_y)
$$

<div style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; font-weight: 500;">
  <strong>이전 은닉층의 정보가 다음 은닉층의 정보에 업데이트되면서 결국 최종 출력에 반영된다는 것을 확인할 수 있다.</strong>
</div>

---

# RNN의 학습 과정

앞서 언급했듯, 가중치 행렬($ W_x, W_h, W_y $)과 편향($ b_h, b_y $)을 조정하여 손실을 최소화하는 파라미터를 도출하는 것이 RNN 학습의 목표이다.

#### 주요 용어
- $ T $: 전체 Timestep  
- $ y_t $: 예측값  
- $ \hat{y}_t $: 실제값  
- $ L $: 전체 시점 $ T $ 에 대한 손실  
- $ l $: 시점 $ t $ 에 대한 손실  
- $ \eta $: 학습률 

### RNN의 학습 과정은 아래의 세 가지 주요 단계로 이루어진다.

**1. Forward Pass (순전파)**  

순전파 단계에서는 입력 데이터를 기반으로 은닉 상태와 출력을 계산하며, 이 출력을 통해 예측값과 실제값의 차이를 도출한다.

- **은닉 상태 업데이트**  
    $$ 
    h_t = f(W_h h_{t-1} + W_x x_t + b_h) 
    $$  

- **출력 계산**  
    $$ 
    y_t = g(W_y h_t + b_y) 
    $$  

- **손실 계산**  
    $$ 
    L = \sum_{t=1}^T l(y_t, \hat{y}_t)
    $$  
    - 예를 들어, 교차 엔트로피 손실 함수는 다음과 같다:  
    $$ 
    l(y_t, \hat{y}_t) = -\hat{y}_t \log(y_t)
    $$  

## 2. Backpropagation Through Time (BPTT, 역전파)

RNN의 역전파는 출력층에서 입력층으로 오차를 전파하며, 시간 축을 따라 연결된 은닉 상태 간의 의존성도 함께 고려하여 각 층의 가중치를 업데이트하는 방식이다.

### 출력층의 기울기 계산  
- **$ W_y $에 대한 기울기**
  $$
  \frac{\partial L}{\partial W_y} = \sum_{t=1}^T \frac{\partial L}{\partial y_t} \cdot \frac{\partial y_t}{\partial W_y}
  $$  

- **$ b_y $에 대한 기울기**
  $$
  \frac{\partial L}{\partial b_y} = \sum_{t=1}^T \frac{\partial L}{\partial y_t}
  $$  

### 은닉층의 기울기 계산  
- **$ W_x $에 대한 기울기**
  $$
  \frac{\partial L}{\partial W_x} = \sum_{t=1}^T \frac{\partial L}{\partial h_t} \cdot \frac{\partial h_t}{\partial W_x}
  $$  

- **$ W_h $에 대한 기울기**
  $$
  \frac{\partial L}{\partial W_h} = \sum_{t=1}^T \frac{\partial L}{\partial h_t} \cdot \frac{\partial h_t}{\partial W_h}
  $$  

- **$ b_h $에 대한 기울기**
  $$
  \frac{\partial L}{\partial b_h} = \sum_{t=1}^T \frac{\partial L}{\partial h_t}
  $$  

### 시간 축을 따라 기울기 전파  
$$
\frac{\partial L}{\partial h_{t-1}} = \frac{\partial L}{\partial h_t} \cdot \frac{\partial h_t}{\partial h_{t-1}}
$$

- 역전파 과정에서는 마지막 시점 $ t = T $ 부터 $ \frac{\partial L}{\partial h_T} $ 를 계산하며, $ t = 1 $ 까지 반복적으로 전파한다.
- 결과적으로, 모든 은닉 상태의 기울기를 누적하여 반영하게 된다.

---

## 3. Weight Update (가중치 업데이트)

경사하강법을 사용하여 각 가중치를 업데이트한다:
$$
W \leftarrow W - \eta \frac{\partial L}{\partial W}
$$

---

# RNN의 한계점

- **기울기 손실 및 폭발**
    - 역전파(backpropagation) 과정에서 기울기가 순차적으로 곱셈되다 보면, 지수적으로 감소하거나 반대로 너무 커지는 문제가 발생한다. 
    - 기울기가 작을 경우 모델이 학습이 어렵고, 큰 기울기는 가중치가 발산해 모델의 불안정성이 증가한다. 

- **장기 의존성**
    - RNN은 은닉 상태를 순차적으로 업데이트하며 입력을 처리하기 때문에, 시퀀스가 길어질수록 예전의 정보가 사라지거나 왜곡될 가능성이 크다. 
    - 이 때문에 긴 문맥을 고려해야 하는 문제에서 한계가 두드러진다. 

- **병렬화 한계**
    - RNN 구조상 시퀀스 데이터를 순차적으로 처리해야 하므로, 병렬 처리(parallelization)가 쉽지 않다.

- **학습 시간 및 메모리 한계**
    - 시퀀스 길이가 증가하면 RNN의 연산 횟수도 선형적으로 증가하기 때문에, 학습 시간과 메모리 사용이 크게 늘어난다. 
    - 긴 시퀀스를 효율적으로 처리해야 하는 환경에선 비효율적이다.

- **구조적 제약**
    - 전통적인 RNN은 시퀀스 순서대로만 정보를 전파하기에, 문제나 데이터 특성에 따라서는 단방향으로만 흐르는 정보 제한이 존재한다. 
    - 이를 해결하기 위해 양방향 RNN(Bi-RNN) 등이 제안되었으나, 구조적 복잡성이 증가한다.

## References

- [WIKIPEDIA - Recurrent neural network](https://en.wikipedia.org/wiki/Recurrent_neural_network)
