#!/usr/bin/env python
# coding: utf-8

# # 瞬态时间序列观测数据的分析方法

# 对于空间和地面观测获取到的时间序列，无论是来自物理测量还是数字建模，面对的都是非线性物理系统。
# 
# - 针对这些系统，在多数情况下我们都无法直接建立解析数学模型，而只能通过观测或者实验获取它们的连续时间演化数据，并试图从中获取相关的动力学系统信息。
# - 同时，实测数据精度的限制和不确定性物理因素，在很大程度上制约着我们对物理量瞬态时间演化数据的理解。
# 
# 因此，如何找到合适的算法来分析这些瞬态数据，并从中提取有效的时间-频率信息来构建相关参数的预测模型，是空间物理观测研究当前面临的一个重要问题。
# 
# 日地空间系统的观测数据不仅在时间上是自相关的，在空间上也是连续的，比如地磁场、行星际磁场、太阳风等离子体密度和温度等。但对于空间场量之间的相关性，到目前为止还没有严格的检验方法，现有的处理手段是
# 
# - 将空间网格化，通过计算局地的相关系数，判断其置信度，再将同水平的置信区域用等值线或者同样的阴影面积标出，以此来显现空间场量的相关显著性。

# ## 时间序列的数据分析

# ### 相关性分析

# #### Pearson相关系数

# 相关系数、方差、协方差和回归系数

# Pearson相关系数能直观地定量描述变量之间的关系，且容易解释，故在实际分析中应用得最多，但它存在几点不足：
# 
# - 不适用于非线性关系
# - 对异常值（野值）的影响很敏感
# - 分析包含行波的问题时需要先考虑时间差
# 
# 因此，计算Pearson相关系数之间需要先分析数据是否包含非线性关系、是否存在野值、是否有时间滞后现象等特征，再根据实际情况做相应线性化处理。

# #### 显著性检验

# 通常情况下，可以用显著性检验来
# 
# - 表示两变量之间的差异
# - 或者差异是否明显
# 
# 具体可用两种统计方法来计算：
# 
# - Z统计法
# - t统计法

# #### 自由度估计
# 
# 由于自然气候学变量通常都具有红噪声，与白噪声不同的是，红噪声在不同时刻的值并不是随机的，这意味着该变量在某一时刻的值会对后序时刻产生影响。因此，在进行相关系数的显著性检验时，为避免自相关性对相关系数置信度估计的影响，需要先估计时间序列的有效自由度。
# 
# 估计自由度的方法有很多：
# 
# - Dawdy和Matalas(1964)
# - Leith(1973)
# - Bretherton(1999)

# #### 秩相关系数
# 
# 秩相关系数是一个与分布无关的秩统计参数，由Spearman于1904年提出，用来度量两个变量之间联系的强弱（Zar,2004）。
# 
# 
# 与普通的Pearson相关系数相比，Spearman秩相关系数具有较好的鲁棒性，而且对野值不太敏感。
# 
# 因此，在实际中，如果怀疑待分析的时间序列中存在异常数据，却又没有办法排除或订正的情况下，更适合用秩相关系数来分析。

# #### 滞后相关系数

# 值得注意的是，如果两个待分析的时间序列包含有行波或者任何可以随时间传播的信息，就需要考虑两者之间的相位差，仅按照上述方式简单地计算它们之间的相关系数实际上是不恰当的。
# 
# 为解决这样的问题，常常需要考虑两信号的时间差，再计算滞后相关系数。反之，也可以通过计算两时间序列之间不同的时间滞后相关，来查找它们之间可能的相位差。
# 
# 日地系统中存在很多类似的情况，研究的要素或变量之间的关系都是有时间滞后的，例如行星际太阳风参数与地磁场变化量之间的相关联系。

# ### 功率谱及时频能量谱分析

# 对于时间序列观测数据，目前常用的谱分析方法大致可以分为三种类型：
# 
# - 第一类是基于线性和平稳性假设的传统分析方法，如短时傅里叶变换（STFT）和快速傅里叶变化（FFT）
# - 第二类是针对线性但非平稳数据设计的小波变换（WT）和Wigner-Ville分布
# - 第三类是非线性稳态时间序列分析方法（Tong，2001）
# 
# 然而，实际中获得的大多数观测数据会同时具有非线性和非稳态两个特性，因为无法事先确定基函数，故从这样的数据中分析出精细的物理结构或提炼出精确的关系式绝非易事，即使存在一个较为理想的基函数，也需要通过自适应的方法获得才能有说服力。

# #### 功率谱

# 在处理连续的时间序列时，为了能定量地检测数据中的显著周期，常用的方法是功率谱分析。理论上，计算功率谱要借助于谐波分析来进行，而谐波分析是时间序列信号处理的一种基本手段，又称为调和分析，即用三角函数来拟合时间序列函数，并根据拟合函数来定义信号的周期、相位和振幅。由于实际测量的时间序列中经常包含多种时间尺度的变化成份，在大致确定各变化成份的周期特征后，通常要根据最小二乘法拟合来确定谐波参数，由此获得与实测时间序列最为接近的谐波函数。

# 功率谱常用的算法有两种：
# 
# - 一种是直接计算不同阶数的谐波振幅，称为功率谱，或功率谱密度
# - 第二种是落后自相关方法，需要先根据时间序列求落后时间步长的自协方差矩阵，然后进行谐波分析，检测出周期。

# #### 时频能量谱
# 
# 时频能量谱是分析非线性时间序列最基本的方法之一，可以通过有线时间窗宽的FFT得到。

# ## 常用的时频分析方法
# 
# 在分析非平稳实际信号时，通常需用到一些时频分析技术，通过时间和频率的联合分布函数，以时间-频率空间的能量（或功率）密度来表征信号特征。
# 
# 在数字信号处理领域，根据不同的时频联合分布函数，有多种时频分析方法，常规的时频分析方法大致可以归为线性方法和二次变换两大类：
# 
# - 线性时频分析方法
#     - 短时傅里叶变换
#     - 连续小波变换
# - 二次时频分析方法
#     - Wigner-Ville分布
#     - 由Wigner-Ville分布衍生的核函数法。
#     
# 这些传统的分析方法凭借其自身的优势，已广泛地应用于地球物理、环境科学、地质学等领域

# ### 短时傅里叶变换

# ### 小波变换

# ### Wigner-Ville分布

# ## HHT方法原理及步骤

# HHT是由huang et al.(1998a)提出的一种新的视频分析方法，由经验模态分解（Eppirical Mode Decomposition, EMD）和Hilbert谱分析（Hilbert Spectrum Analysis, HSA）两个基本部分组成。
# 
# 与传统的以傅里叶变化为基础的时频方法不同的是：
# 
# - EMD无需使用预先设定的基函数，因此对非稳态数据具有更好的适应性
# - 由于不严格受Heisenberg测不准原理的制约，HSA在时间域和频率域可以同时具有较高的分辨率
# 
# EMD和HSA的组合提供了一个具有物理意义的时间频率空间的能量描述。

# ### HHT的基本概念

# #### 瞬时频率

# #### 本征模态函数

# ### 经验模态分解

# ### 集合经验模态分解

# ### Hilbert谱分析

# ###  HHT尚待解决的问题
# 
# 在过去的20多年间，HHT方法在诸多自然科学领域获得了广泛的应用。然而，由于缺乏完整的理论体系，HHT方法中还存在以下问题尚待解决：
# 

# #### 问题一
# 
# 
# - HHT方法中的自适应数据分解过程基本是凭经验进行的，很难建立系统的理论模型，与之相关的一些数学问题还未完全解决；由于EMD方法依赖于极值分离IMF和信号，如果某高频模不产生极值，就不可能将低振幅分量从高振幅分量中分离出来。

# #### 问题二
# 
# - IMF的唯一性和最优化EMD问题：弄清IMF的唯一性问题实际就是考虑是否能给出更严格的IMF定义，并找到一个可自动实现的算法。

# ####  问题三
# 
# - 非线性系统辨识和非平稳过程的预测

# ## 总结

# 在分析处理连续的时间序列数据时，除了通过相关性分析研究两个或多个随机变量之间的依赖关系外，常用的方法便是谱分析，它可以客观定量地检测时间序列中的显著的功率或能量分布。然而，在实际中，大多数信号都具有突变性或非稳定变化，除需要了解信号包含的频率成分，还需要关注信号在不同时刻和不同频率范围内的能量分布，FT显然在分析这些信号时不够理想。
# 
# STFT在一定程度上克服了传统FT的全局性缺陷，实现了对信号的局域性分析，但是由于采用固定的窗函数，它并不能适用于所有频段的信号，同时，也不能保证事先设定的窗函数的尺寸与平稳时间尺度相一致。
# 
# WT通过可平移和伸缩的时频窗口，在时域和频域都能较好地体现信号的局部特征，但仍然面临小波基函数难以事先确定的问题。
# 
# HHT方法将自适应的EMD和Hilbert变换相结合，在可能涉及非线性物理过程的非稳态数据分析中体现出很大的优势。
# 
# - 一方面，由于EMD方法无需事先设定基函数，而是根据信号固有的特性进行分解，这不仅可以使得重构信号时所需要建模的参数得到大量简化，还可以防止能量谱的泄露损失。
# - 另一方面，经EMD分解获得的满足Hilbert变化条件的IMF虽不是理论上严格意义的本征值，但却有助于获得信号在频率和时间域的瞬时性质。
# 
# 对于非平稳的实际信号，理想的方法应同时具备完备性、正交性、局部性和自适应性。HHT方法可以基本满足这四种性质，但是同时也存在其自身的局限性和尚待解决的问题。因此，在对自然观测数据进行具体分析时，需结合考虑实际情况并综合各种方法的处理结果进行客观的讨论。

# In[ ]:



