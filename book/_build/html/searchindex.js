Search.setIndex({docnames:["implementation/emd","implementation/memd","implementation/readme","implementation/wavelet","introduction","theory/hht","theory/memd","theory/readme"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["implementation/emd.ipynb","implementation/memd.ipynb","implementation/readme.md","implementation/wavelet.ipynb","introduction.ipynb","theory/hht.ipynb","theory/memd.ipynb","theory/readme.md"],objects:{},objnames:{},objtypes:{},terms:{"0x7f9e34280e90":0,"100":0,"200":0,"2dt":5,"\u4e00\u79cd\u975e\u5e73\u7a33\u4fe1\u53f7\u5206\u6790\u65b9\u6cd5":0,"\u4e00\u822c\u632f\u5e45\u7684\u5e73\u65b9\u53ef\u4ee5\u7528\u6765\u8868\u793ahilbert\u80fd\u91cf\u8c31":5,"\u4e0d\u9700\u8981\u57fa\u51fd\u6570":0,"\u4e3a\u4e86\u5f97\u5230\u77ac\u65f6\u9891\u7387":0,"\u4e3b\u8981\u5305\u62ec":4,"\u4f18\u4e8e\u5085\u91cc\u53f6\u65b9\u6cd5":0,"\u4f20\u7edf\u65f6\u95f4\u5e8f\u5217\u9884\u6d4b\u65b9\u6cd5":4,"\u4f3c\u4e4e\u5e76\u6ca1\u6709\u5b8c\u5168\u5bf9\u5e94\u4e0a":0,"\u4f46\u662f\u5b83\u4e0d\u540c\u4e8efft":0,"\u4f46\u662f\u5bf9\u4e8e\u5176\u4ed6\u7684\u9891\u7387\u5206\u91cf\u6765\u8bf4\u5374\u662f\u5e73\u7a33\u7684":5,"\u4fe1\u53f7\u7531\u5c40\u90e8\u6781\u5927\u503c\u786e\u5b9a\u7684\u4e0a\u5305\u7edc\u7ebf\u548c\u7531\u5c40\u90e8\u6781\u5c0f\u503c\u786e\u5b9a\u7684\u4e0b\u5305\u7edc\u7ebf\u7684\u5747\u503c\u5fc5\u987b\u6ee1\u8db3":0,"\u5173\u4e8e\u672c\u5f81\u6a21\u6001\u5206\u91cf\u7684\u542b\u4e49\u8fd8\u9700\u8981\u8fdb\u4e00\u6b65\u5730\u8fdb\u884c\u7406\u89e3":0,"\u5176\u5fc5\u987b\u6ee1\u8db3\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6":0,"\u5219\u53ef\u5f97\u5230\u539f\u59cb\u6570\u636e\u7684\u4e00\u4e2a\u5982\u4e0b\u5c55\u5f00":5,"\u539f\u59cb\u4fe1\u53f7\u88ab\u5206\u51fa\u4e866\u4e2aimf":0,"\u53c2\u8003\u94fe\u63a5":[1,6],"\u53ef\u4ee5\u5f97\u5230\u632f\u5e45\u7684\u65f6\u9891\u5206\u5e03":5,"\u53ef\u4ee5\u6bd4\u8f83\u4e00\u4e0b\u4ed6\u4eec\u7684\u7ed3\u679c":0,"\u53ef\u4ee5\u770b\u51fa\u8be5\u65b9\u6cd5\u5c06\u539f\u59cb\u65f6\u95f4\u5e8f\u5217\u7684\u4e24\u4e2a\u6a21\u6001\u5b8c\u5168\u5206\u79bb\u4e86\u51fa\u6765":0,"\u548c\u8fc7\u96f6\u70b9\u7684\u4e2a\u6570":0,"\u56e0\u4e3a\u5b83\u6216\u8005\u662f\u4e00\u4e2a\u5355\u8c03\u7684\u8d8b\u52bf\u51fd\u6570":5,"\u56e0\u4e3a\u5bf9\u4e8e\u67d0\u4e9b\u9891\u7387\u6765\u8bf4\u53ef\u80fd\u662f\u975e\u5e73\u7a33\u7684":5,"\u5728\u4efb\u4e00\u65f6\u95f4\u70b9":0,"\u5728\u6574\u4e2a\u6570\u636e\u5e8f\u5217\u5185":0,"\u57fa\u4e8e\u6570\u636e\u672c\u8eab\u53d8\u5316":0,"\u57fa\u4e8e\u6570\u636e\u672c\u8eab\u6765\u5206\u89e3":0,"\u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684\u65f6\u95f4\u5e8f\u5217\u9884\u6d4b":4,"\u57fa\u4e8e\u8fd9\u6837\u7684\u5047\u8bbe":0,"\u57fa\u672c\u6982\u5ff5":7,"\u591a\u53d8\u91cf\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3":2,"\u5982\u679c\u632f\u5e45\u4e0e\u80fd\u91cf\u5bc6\u5ea6\u6709\u5173\u7cfb":5,"\u5b8c\u5907\u6027\u6839\u636e\u5982\u4e0b\u516c\u5f0f\u53ef\u4ee5\u5f97\u5230\u4fdd\u8bc1":5,"\u5b9a\u4e49\u77ac\u65f6\u9891\u7387\u7684\u6761\u4ef6":5,"\u5bf9\u6bd4fourier\u53d8\u5316":5,"\u5c0f\u6ce2\u53d8\u6362":[2,7],"\u5de5\u4f5c\u548c\u5b66\u4e60\u4e2d\u53d1\u73b0\u65f6\u95f4\u5e8f\u5217\u5206\u6790\u7528\u5904\u9887\u591a":4,"\u5e76\u8ba1\u7b97\u6bcf\u4e2a\u5206\u91cf\u7684\u77ac\u65f6\u9891\u7387":5,"\u5f97\u5230imf\u7684\u5404\u4e2a\u5206\u91cf":5,"\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u5173\u7cfb":0,"\u6216\u8005\u662f\u4e00\u4e2a\u5e38\u6570":5,"\u628a\u5e73\u7a33\u6027\u5b9a\u4e49\u6210\u9891\u7387\u7684\u51fd\u6570\u662f\u5408\u7406\u7684":5,"\u63d0\u51fa\u672c\u5f81\u6a21\u6001\u5206\u91cf":0,"\u6446\u8131\u4e86\u5085\u91cc\u53f6\u53d8\u6362\u7684\u5c40\u9650\u6027":0,"\u65f6\u95f4\u5e8f\u5217\u57fa\u672c\u6982\u5ff5":4,"\u65f6\u9891\u5206\u6790":4,"\u672c\u5f81\u6a21\u51fd\u6570\u4e0e\u77ac\u65f6\u9891\u7387\u7684\u5173\u7cfb":5,"\u672c\u5f81\u6a21\u6001\u5206\u91cf":0,"\u6781\u503c\u70b9\u7684\u4e2a\u6570":0,"\u6839\u636e\u4e0a\u9762\u7684\u5c55\u5f00":5,"\u6b63\u4ea4\u6027":5,"\u7136\u540e\u5bf9imf\u7684\u5404\u4e2a\u5206\u91cf\u8fdb\u884chilbert\u53d8\u6362":5,"\u7279\u6b64\u603b\u7ed3":4,"\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3":[2,7],"\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3\u662f\u4e00\u79cd\u65b0\u7684\u65f6\u9891\u5206\u6790\u65b9\u6cd5":0,"\u7f3a\u70b9\u662f\u6a21\u6001\u6df7\u53e0":0,"\u800c\u4e14\u662f\u4e00\u79cd\u81ea\u9002\u5e94\u7684\u65f6\u9891\u5c40\u90e8\u5316\u5206\u6790\u65b9\u6cd5":0,"\u800c\u539f\u59cb\u4fe1\u53f7\u521a\u597d\u662f\u75316\u4e2a\u4e0d\u540c\u90e8\u5206\u7ec4\u6210\u7684":0,"\u8ba4\u4e3a\u4fe1\u53f7\u7531\u4e0d\u540c\u7684imf\u7ec4\u5408\u800c\u6210":0,"\u8fd9\u5c31\u662f\u4e00\u4e2a\u4e24\u91cd\u7684\u8fed\u4ee3\u8fc7\u7a0b":5,"\u8fd9\u91cc\u6211\u4eec\u4e0d\u8003\u8651\u6700\u540e\u7684\u90a3\u4e2a\u6b8b\u91cf":5,"\u975e\u7ebf\u6027\u975e\u5e73\u7a33\u65f6\u95f4\u5e8f\u5217\u5206\u6790\u7684emd\u65b9\u6cd5\u548chilbert\u8c31\u65b9\u6cd5":5,"\u9996\u5148\u5bf9\u539f\u59cb\u6570\u636e\u8fdb\u884c\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3":5,"case":[0,5],"default":0,"emd\u9002\u5408\u4e8b\u5b9c\u6570\u636e":0,"function":0,"imf\u4e0e\u91c7\u6837\u9891\u7387\u76f8\u5173":0,"imf\u540c\u65f6\u5177\u5907\u7ebf\u6027\u548c\u975e\u7ebf\u6027\u7684\u7279\u70b9":0,"import":[0,1,3],"int":5,"return":0,"short":3,"true":3,For:5,Then:5,With:5,a_j:5,accomod:5,add_subplot:3,also:5,alwai:5,amplitud:5,analyt:5,ani:5,approxim:3,arctan:5,arima:7,artitrari:5,assign:0,asymmetr:3,autoreload:[0,3],axi:0,behav:5,bior1:3,bior:3,biorthogon:3,c_i:5,camera:3,can:5,cgau:3,cmap:3,cmor:3,coeffs2:3,coif10:3,coif11:3,coif12:3,coif13:3,coif14:3,coif15:3,coif16:3,coif17:3,coif1:3,coif2:3,coif3:3,coif4:3,coif5:3,coif6:3,coif7:3,coif8:3,coif9:3,coif:3,coiflet:3,com:[0,1,6],commsp:[1,6],complet:0,complex:[3,5],compon:5,condit:5,conjug:5,continu:3,cos:0,creat:0,cwt:3,data:[3,5],daubechi:3,db1:3,decomposit:5,decsnowflak:[1,6],def:0,defin:[0,5],definit:5,degre:5,delta:5,detail:3,detect:0,diagon:3,discret:3,dmei:3,dss:5,dwt2:3,dwt:3,effici:5,eimf:0,elif:0,emd:[1,5,6],enabl:5,encount:5,energi:5,enough:0,enumer:[0,3],esnembl:0,everywher:5,execut:0,exp:5,expans:5,extrema:0,extrema_detect:0,fals:3,famili:3,fbsp:3,fig:3,figsiz:[0,3],figur:[0,3],filter:3,fir:3,fontsiz:3,form:5,fortun:5,fourier:5,frac:[0,5],frequenc:[3,5],from:0,gau:3,gaussian:3,gener:5,get_part:0,github:[0,1,6],grai:3,greatli:5,haar:3,hat:3,have:5,here:0,hibert:5,horizont:3,how:0,htm:[1,6],http:[0,1,6],huang:0,imag:3,imf:[0,5],improv:5,imshow:3,infti:5,inlin:3,input:0,instantan:5,int_0:5,int_:5,interpol:3,intrins:0,its:5,kind:3,know:5,label:0,lambda:0,laszukdawid:0,leakag:5,left:5,legend:0,length:3,leq:0,libeemd:[1,6],limits_:5,linear:5,linspac:0,locator_param:0,make:5,mandic:[1,6],margin:5,matplotlib:[0,3],max:0,mean:5,memd:[1,6],method:0,mexh:3,mexican:3,meyer:3,min:0,mode:0,modifi:5,morl:3,morlet:3,most:[0,5],n_e:0,n_z:0,name:3,nbin:0,nearest:3,nimf:0,non:5,nonlinear:5,norden:0,num:0,numpi:[0,3],omega:5,omega_j:5,onli:5,origin:3,orthogon:[3,5],overlin:5,pair:5,panda:3,parabol:0,part:0,pass:0,phhysic:5,plot:[0,3],plt:[0,3],point:5,print:3,pyeemd:[1,6],pylab:0,pyplot:[0,3],python:[1,6],pywavelet:3,pywt:3,r_n:5,random:0,rang:0,rbio:3,reload_ext:[0,3],repres:5,requir:5,research:[1,6],result:0,revers:3,right:5,sai:0,script:0,sens:5,seri:5,set:0,set_titl:3,set_xtick:3,set_ytick:3,shan:3,shannon:3,shape:0,show:[0,3],signal:[0,5],simplest:0,simpli:0,sin:0,small:5,spline:3,start:5,stationar:5,stationari:5,statist:5,str:0,subplot:0,sum:5,sym:3,symlet:3,symmetri:3,system:5,theta:5,thi:5,tight_layout:[0,3],time:[0,5],titl:[0,3],transform:[3,5],tutori:6,two:5,using:0,variabl:[0,5],vertic:3,want:0,wavelet:3,wavelist:3,well:5,which:5,would:5,www:[1,6],xlabel:0,ylabel:0,your:0},titles:["\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3","\u591a\u53d8\u91cf\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3","\u76f8\u5173\u5b9e\u73b0","\u5c0f\u6ce2\u53d8\u6362","\u65f6\u95f4\u5e8f\u5217\u5206\u6790\u7b80\u4ecb","Hilbert-Huang\u53d8\u6362","\u591a\u53d8\u91cf\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3","\u57fa\u7840\u7406\u8bba\u77e5\u8bc6"],titleterms:{"\u5206\u89e3\u7684\u5b8c\u5907\u6027\u548c\u6b63\u4ea4\u6027":5,"\u57fa\u672c\u60f3\u6cd5":0,"\u57fa\u7840\u7406\u8bba\u77e5\u8bc6":7,"\u591a\u53d8\u91cf\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3":[1,6],"\u5b9a\u6027\u8bc4\u4f30\u65f6\u95f4\u5e8f\u5217\u7684\u5e73\u7a33\u6027":5,"\u5c0f\u6ce2\u53d8\u6362":3,"\u65f6\u95f4\u5e8f\u5217\u5206\u6790\u7b80\u4ecb":4,"\u672c\u5f81\u6a21\u51fd\u6570":5,"\u76f8\u5173\u5b9e\u73b0":2,"\u77ac\u65f6\u9891\u7387":5,"\u7b80\u5355\u4ecb\u7ecd":0,"\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3":0,"\u7ecf\u9a8c\u6a21\u6001\u5206\u89e3\u65b9\u6cd5":5,"\u7ecf\u9a8c\u6a21\u6001emd\u5206\u89e3\u65b9\u6cd5\u7684\u539f\u7406\u53ca\u7279\u6027":0,"function":5,"huang\u53d8\u6362":5,The:5,eemd:0,emd:0,hilbert:5,intrins:5,memd:[],mode:5,pyemd:0,spectrum:5,tutori:1}})