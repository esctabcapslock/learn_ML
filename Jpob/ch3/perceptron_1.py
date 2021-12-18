import numpy as np

inputs = np.array([[0,0],[0,1],[1,0],[1,1]])
outputs = np.array([[0],[1],[1],[1]])
N = 4 #입력 데이터 개수
nIn = 2#입력 데이터 차원
nOut = 1#출력 차원
eta = 0.5 #0.5는 그냥
T = 5#반복수
weights = np.random.rand(nIn+1,nOut)*0.1 # 0.1은 그냥 
#끝에 바이어스 붙이기
inputs = np.concatenate((inputs, -np.ones((N, 1))), axis=1)


## 반복
count = 0

for _ in range(T):
    print("count",count)
    print("weights",weights,sep='\n')
    print("weights",weights,sep='\n')
    # 활성화 계산
    activation =  np.dot(inputs, weights)
    print("activation",activation,sep='\n')
    activation = np.where(activation>0,1,0)
    print("activation",activation,sep='\n')
    
    weights += eta*np.dot(np.transpose(inputs), outputs-activation)
    count+=1