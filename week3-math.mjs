export const cliqueNodes=['1','2','3','4','5'];
export const cliqueEdges=[['1','2'],['1','3'],['1','4'],['2','3'],['2','4'],['3','4'],['3','5'],['4','5']];
export const coreNodes=[...cliqueNodes,'6','7'];
export const coreEdges=[...cliqueEdges,['5','6'],['6','7']];
export function linked(a,b,edges=cliqueEdges){return edges.some(([s,t])=>(s===a&&t===b)||(s===b&&t===a));}
export function cliqueType(selected){if(selected.length<2)return 'small';if(!selected.every(a=>selected.every(b=>a===b||linked(a,b))))return 'incomplete';if(cliqueNodes.some(n=>!selected.includes(n)&&selected.every(s=>linked(n,s))))return 'extendable';return 'maximal';}
export function peelLayer(active,k,edges=coreEdges){return active.filter(n=>edges.filter(([a,b])=>(a===n&&active.includes(b))||(b===n&&active.includes(a))).length<k);}
export function degreeCentralization(degrees){const n=degrees.length;return degrees.reduce((s,d)=>s+Math.max(...degrees)-d,0)/((n-1)*(n-2));}
export function modularity(m,groups){return groups.reduce((s,[internal,degreeSum])=>s+internal/m-(degreeSum/(2*m))**2,0);}
