#!/usr/bin/env python
# coding: utf-8

# # Hilbert-Huang变换
# 
# **非线性非平稳时间序列分析的EMD方法和Hilbert谱方法**
# 
# ## 瞬时频率
# 
# Hilbert transform: For any artitrary time series, X(t), we can always have its Hibert Transform, Y(t), as
# 
# $$
#     Y(t) = \frac{1}{\pi}P.V.\int_{-\infty}^{\infty}\frac{X(t')}{t-t'}dt'
# $$
# 
# 
# With this definition, $X(t)$ and $Y(t)$ form the complex conjugate pair, so we can have an analytic signal, $Z(t)$, as
# 
# $$
#     Z(t) = X(t) + i Y(t)=a(t)e^{i\theta(t)}
# $$
# 
# in which
# 
# $$
#     a(t)=[X^2(t)+Y^2(t)]^{1/2},\ \ \theta(t)=\arctan\left(\frac{Y(t)}{X(t)}\right)
# $$
# 
# Then the instantaneous frequency is defined as 
# 
# $$
#     \omega=\frac{d\theta(t)}{dt}
# $$
# 
# Intrinsic mode function (IMF) for which the instantaneous frequency can be defined everywhere.
# 
# 定义瞬时频率的条件：
# 
# 1.
# 
# 2.
# 
# 3.
# 
# 本征模函数与瞬时频率的关系？
# 
# ## 本征模函数（Intrinsic mode functions）
# 
# Two conditions:
# 
# - 
# - 
# 
# ## 经验模态分解方法
# 
# Knowing the well-behaved Hilbert transforms of the IMF components is only the starting point.
# 
# 
# 这就是一个两重的迭代过程
# 
# ## 分解的完备性和正交性
# 
# 完备性根据如下公式可以得到保证：
# 
# $$
#     X(t) = \sum\limits_{i=1}^{n}c_i + r_n
# $$
# 
# 正交性：
# 
# Orthogonality is a requirement only for linear decomposition systems; it would not make phhysical sense for a nonlinear decomposition as in EMD. 
# 
# Fortunately, in most cases encountered, the leakage is small.
# 
# ## The Hilbert spectrum
# 
# 首先对原始数据进行经验模态分解，得到IMF的各个分量，然后对IMF的各个分量进行Hilbert变换，并计算每个分量的瞬时频率，则可得到原始数据的一个如下展开：
# 
# $$
#     X(t)=\sum\limits_{j=1}^{n}a_j(t)exp\left(i\int \omega_j(t)dt\right)
# $$
# 
# 这里我们不考虑最后的那个残量，因为它或者是一个单调的趋势函数，或者是一个常数。
# 
# 对比Fourier变化：
# 
# $$
#     X(t)=\sum\limits_{j=1}^{\infty}a_je^{i\omega_j t}
# $$
# 
# **The IMF represents a generalized Fourier expansion. The variable amplitude and the instantaneous frequency have not only greatly improved the efficiency of the expansion,
# but also enabled the expansion to accomodate non-stationary data.**
# 
# 根据上面的展开，可以得到振幅的时频分布：$H(\omega,t)$。如果振幅与能量密度有关系，一般振幅的平方可以用来表示Hilbert能量谱。
# 
# The marginal spectrum:
# 
# $$
#     h(\omega) = \int_0^T H(\omega,t)dt
# $$
# 
# The instantaneous energy:
# 
# $$
#     IE(t)=\int_{\omega}H^2(\omega,t)d\omega
# $$
# 
# 
# ### 定性评估时间序列的平稳性
# 
# mean marginal spectrum:
# 
# $$
#     n(\omega) = \frac{1}{T}h(\omega)
# $$
# 
# the degree of stationarity:
# 
# $$
#     DS(\omega) = \frac{1}{T}\int_0^T\left(1-\frac{H(\omega,t)}{n(\omega)}\right)^2dt
# $$
# 
# 把平稳性定义成频率的函数是合理的，因为对于某些频率来说可能是非平稳的，但是对于其他的频率分量来说却是平稳的。
# 
# A modified statistical stationary：
# 
# $$
#     DSS(\omega, \Delta T)=\frac{1}{T}\int_0^{T}\left(1-\frac{\overline{H(\omega,t)}}{n(\omega)}\right)^2dt
# $$
# 

# In[ ]:




