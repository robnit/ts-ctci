echo "Enter algorithm name:"
read algoName

sed "s/ALGONAME/$algoName/g" utils/template.sh >> src/$algoName.ts
sed "s/ALGONAME/$algoName/g" utils/testTemplate.sh >> src/$algoName.spec.ts

echo "
New files created:
    src/$algoName.ts
    src/$algoName.spec.ts
"