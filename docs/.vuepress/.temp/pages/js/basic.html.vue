<template><div><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2>
<p>作用：返回正在使用的值的基本类型</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 基本类型/值类型/原始值/原始类型	</span>
<span class="token keyword">var</span> null1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> undefined1 <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> string1 <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> number1 <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">var</span> boolean1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> null1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object, 需要注意</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> undefined1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> string1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> number1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> boolean1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> symbol1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// symbol</span>

<span class="token comment">// 引用类型/复杂值</span>
<span class="token keyword">var</span> myString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'male'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myBoolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myFunction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token string">'return x * y'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myRegExp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'\\bt[a-z]+\\b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myError <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myString<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myNumber<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myBoolean<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myFunction<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 function 需要注意</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myDate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myRegExp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myError<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>typeof XXX 和typeof(xxxx)是一样的</p>
</blockquote>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<ol>
<li>null类型是object</li>
<li>new Function是function</li>
</ol>
<h2 id="关于string字符串" tabindex="-1"><a class="header-anchor" href="#关于string字符串" aria-hidden="true">#</a> 关于string字符串</h2>
<blockquote>
<p>注意：在js里，字符串一旦被创建，他们的值就不能改变了，当你要改变一个变量保存的字符串时，先要销毁原来的字符串，然后在用另一个包含新值的字符串去填充该变量。</p>
</blockquote>
<ul>
<li>字符串有方法，但是不可以设置属性<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str<span class="token operator">=</span><span class="token string">'abc'</span>
str<span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token string">'a'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">//是undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>另一种创建字符串的方法，但是使用typeof判断是object<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment">//或const str=new Object('abc')</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span> <span class="token comment">//object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h5>
<ul>
<li>我们通过平常的形式创建好字符串后再去调用他的方法时有以下几个步骤：
<ul>
<li>声明字符串 <code>const str='XXX'</code></li>
<li>访问它的属性（方法）<code>str.XXX()</code></li>
<li>以读模式访问str,这时会有以下几个步骤：
<ul>
<li>new String 方法返回一个实例</li>
<li>调用实例上的方法</li>
<li>销毁实例</li>
<li>新的字符串填充</li>
<li>所以真实的执行步骤是：</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> str<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'aaa'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> str1<span class="token operator">=</span>str<span class="token punctuation">.</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  str<span class="token operator">=</span><span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="为什么给字符串设置属性无效" tabindex="-1"><a class="header-anchor" href="#为什么给字符串设置属性无效" aria-hidden="true">#</a> 为什么给字符串设置属性无效</h5>
<ul>
<li>在给str添加属性时，首先会创建一个实例，给这个实例设置一个属性</li>
<li>当str.xxx这行代码执行完时，这个实例会被销毁</li>
<li>所以当我们访问str时没有这个属性</li>
</ul>
<h5 id="通过new-string-创建的字符串实例其实是一个字符串对象-是一个引用类型。" tabindex="-1"><a class="header-anchor" href="#通过new-string-创建的字符串实例其实是一个字符串对象-是一个引用类型。" aria-hidden="true">#</a> 通过new String 创建的字符串实例其实是一个字符串对象，是一个引用类型。</h5>
<p>当我们调用new String时创建一个string对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'aaa'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'str'</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>  <span class="token comment">//{String{'aaa'}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic.chitchat.top/images/js_string.png" alt="Alt text"></p>
</div></template>


