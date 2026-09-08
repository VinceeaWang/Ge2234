export function metrics(names, edges) {
  const n=names.length, a=Array.from({length:n},()=>Array(n).fill(0));
  for(const [s,t] of edges){const i=names.indexOf(s),j=names.indexOf(t);a[i][j]=a[j][i]=1;}
  const distances=a.map((_,s)=>{const d=Array(n).fill(Infinity),q=[s];d[s]=0;for(const v of q)for(let w=0;w<n;w++)if(a[v][w]&&!Number.isFinite(d[w])){d[w]=d[v]+1;q.push(w);}return d;});
  const bet=Array(n).fill(0);
  // Enumerate shortest paths on these small teaching graphs; unordered pairs, endpoints excluded.
  for(let s=0;s<n;s++)for(let t=s+1;t<n;t++){
    const paths=[];function visit(v,path){if(v===t){paths.push(path);return;}for(let w=0;w<n;w++)if(a[v][w]&&distances[s][w]===distances[s][v]+1&&distances[s][w]<=distances[s][t])visit(w,[...path,w]);}visit(s,[s]);
    for(const path of paths)for(const v of path.slice(1,-1))bet[v]+=1/paths.length;
  }
  let eigen=Array(n).fill(1/Math.sqrt(n));
  // Shift by I to avoid oscillation on bipartite graphs; eigenvectors are unchanged.
  for(let k=0;k<1000;k++){const next=a.map((row,i)=>eigen[i]+row.reduce((s,v,j)=>s+v*eigen[j],0));const norm=Math.hypot(...next);eigen=next.map(v=>v/norm);}
  return {a,distances,degree:a.map(r=>r.reduce((s,v)=>s+v,0)),sums:distances.map(r=>r.reduce((s,v)=>s+v,0)),bet,eigen,diameter:Math.max(...distances.flat()),apl:distances.flat().reduce((s,v)=>s+v,0)/(n*(n-1))};
}
export const sharedNames=['A','B','C','D','E','F'];
export const sharedEdges=[['A','B'],['A','C'],['B','C'],['C','D'],['D','E'],['E','F']];
export function parseAnswer(value){const s=String(value).trim();if(!s)return NaN;if(/^[-+]?\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(s)){const [a,b]=s.split('/').map(Number);return b===0?NaN:a/b;}return Number(s);}
export function isCorrect(value,expected,tolerance=.0006){const v=parseAnswer(value);return Number.isFinite(v)&&Math.abs(v-expected)<=tolerance;}
