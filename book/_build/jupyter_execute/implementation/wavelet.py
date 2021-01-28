#!/usr/bin/env python
# coding: utf-8

# # 小波变换

# - [PyWavelets](https://github.com/PyWavelets/pywt)

# In[1]:


get_ipython().run_line_magic('reload_ext', 'autoreload')
get_ipython().run_line_magic('autoreload', '2')
get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


import pandas as pd
import numpy as np
import pywt
import pywt.data
import matplotlib.pyplot as plt


# In[3]:


original = pywt.data.camera()


# In[4]:


# Wavelet transform of image, and plot approximation and details
titles = ['Approximation', ' Horizontal detail',
          'Vertical detail', 'Diagonal detail']
coeffs2 = pywt.dwt2(original, 'bior1.3')
LL, (LH, HL, HH) = coeffs2
fig = plt.figure(figsize=(12, 3))
for i, a in enumerate([LL, LH, HL, HH]):
    ax = fig.add_subplot(1, 4, i + 1)
    ax.imshow(a, interpolation="nearest", cmap=plt.cm.gray)
    ax.set_title(titles[i], fontsize=10)
    ax.set_xticks([])
    ax.set_yticks([])

fig.tight_layout()
plt.show()


# In[5]:


pywt.families()


# In[6]:


pywt.families(short=False)


# In[7]:


pywt.wavelist(family='coif',kind='discrete')


# In[8]:


pywt.wavelist(family='haar',kind='continuous')


# In[9]:


wavelet = pywt.Wavelet('db1')


# In[10]:


print(wavelet)


# In[ ]:




