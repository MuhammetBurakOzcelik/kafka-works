# docker rm -f registry-01
# docker run -d --restart=always --name registry-01  -p 5000:5000 registry:2

docker build ./api-gateway/ -t api-gateway 
docker build ./auth/ -t auth
docker build ./billing/ -t billing

docker tag api-gateway localhost:5000/api-gateway
docker tag auth localhost:5000/auth
docker tag billing localhost:5000/billing

# docker push localhost:5000/api-gateway
# docker push localhost:5000/auth
# docker push localhost:5000/billing

curl localhost:5000/v2/_catalog

kubectl apply -f  ./api-gateway/deploy.yml 
kubectl apply -f  ./auth/deploy.yml 
kubectl apply -f  ./billing/deploy.yml
kubectl apply -f  ./main.yml

kubectl rollout restart deployment