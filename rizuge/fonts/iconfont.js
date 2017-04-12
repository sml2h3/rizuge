;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zaijia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M394.45384 524.971429c0 36.042891 15.233959 68.575842 39.572274 91.567485-58.840106 26.955932-104.250342 80.3367-118.752638 146.111752-3.208065 14.556531 5.988388 28.953426 20.540825 32.162514 1.956561 0.431835 3.913123 0.639566 5.836939 0.639566 12.388145 0 23.548322-8.584516 26.325575-21.180392 15.689331-71.172993 80.069617-122.828466 153.077398-122.828466 72.700789 0 137.025816 51.392484 152.945391 122.202203 3.267417 14.539134 17.698081 23.683399 32.244378 20.405749 14.539134-3.267417 23.677259-17.705244 20.405749-32.244378-10.326183-45.941332-36.270065-87.646176-73.049736-117.436666-14.140045-11.45182-29.679973-20.946055-46.139853-28.335349 24.030299-22.961968 39.045271-55.283094 39.045271-91.065042 0-69.490677-56.534598-126.027321-126.023228-126.027321C450.988438 398.945131 394.45384 455.480752 394.45384 524.971429zM592.536244 524.971429c0 39.73191-32.323173 72.055083-72.055083 72.055083s-72.059176-32.323173-72.059176-72.055083c0-39.732933 32.327266-72.059176 72.059176-72.059176S592.536244 485.238496 592.536244 524.971429z"  ></path>' +
    '' +
    '<path d="M977.386356 515.195785 562.722218 100.534717c-26.292829-26.292829-69.068052-26.292829-95.359858 0L52.702316 515.195785c-10.539031 10.541077-10.539031 27.623128 0 38.164205 5.269004 5.266957 12.174274 7.90197 19.080567 7.90197s13.811564-2.635013 19.080567-7.90197l31.311123-31.311123L122.174574 876.43106c0 37.178761 30.248931 67.427692 67.427692 67.427692l647.087675 0c37.178761 0 67.427692-30.248931 67.427692-67.427692L904.117632 518.252401l35.106566 35.106566c10.541077 10.533914 27.623128 10.533914 38.164205 0C987.92334 542.818913 987.92334 525.735839 977.386356 515.195785zM850.14744 876.43106c0 7.421017-6.037507 13.459546-13.459546 13.459546l-647.087675 0c-7.421017 0-13.459546-6.037507-13.459546-13.459546L176.140673 468.080721l329.384869-329.384869c3.429099-3.431146 7.43432-3.940752 9.515724-3.940752 2.081405 0 6.087649 0.51063 9.515724 3.940752L850.14744 464.284255 850.14744 876.43106z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anfangzaijia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M367.962489 518.779404c0 49.632397 24.565489 93.63354 62.175061 120.488165-30.788214 10.252505-59.711963 25.996071-85.116563 46.654576-47.327912 38.485523-80.586386 92.309382-93.64889 151.554718-2.433422 11.038404 4.541433 21.959128 15.579837 24.393573 1.484817 0.326435 2.965541 0.484024 4.425799 0.484024 9.394974 0 17.860786-6.510274 19.966751-16.062837 11.08036-50.256614 39.314401-95.931886 79.501682-128.61117 38.526455-31.328519 86.599334-49.338708 136.210241-51.211359 2.935865 0.173962 5.891174 0.273223 8.870018 0.273223 2.916423 0 5.810333-0.094144 8.685823-0.261966 49.321312 1.941212 97.127108 19.840884 135.490857 50.913577 40.114626 32.488948 68.40188 77.940117 79.651085 127.97979 2.479471 11.028171 13.431917 17.959024 24.455995 15.47853 11.027148-2.479471 17.958-13.428847 15.47853-24.455995-13.261025-58.989509-46.581921-112.548332-93.823875-150.810774-25.195845-20.406772-53.846372-35.986609-84.330664-46.185902 37.711903-26.843368 62.355163-70.907956 62.355163-120.620172 0-81.58718-66.375733-147.962913-147.962913-147.962913S367.962489 437.192224 367.962489 518.779404zM622.956068 518.779404c0 56.310493-43.711548 102.601796-98.985432 106.72879-2.77009-0.085958-5.54325-0.144286-8.319479-0.144286-2.654456 0-5.305843 0.054235-7.954159 0.13303-55.186903-4.216022-98.801237-50.468438-98.801237-106.717534 0-59.017138 48.013527-107.030665 107.030665-107.030665S622.956068 459.762265 622.956068 518.779404z"  ></path>' +
    '' +
    '<path d="M976.897216 481.606783 556.251853 60.962443c-11.614525-11.614525-27.056216-18.011212-43.481304-18.011212-16.425088 0-31.867802 6.395664-43.482327 18.011212L48.643883 481.606783c-7.993045 7.993045-7.993045 20.951171 0 28.943193s20.951171 7.993045 28.943193 0l45.815465-45.815465 0 499.278257c0 11.30344 9.162684 20.466124 20.466124 20.466124l737.803769 0c11.30344 0 20.466124-9.162684 20.466124-20.466124L902.138558 464.735533l45.814442 45.814442c3.996011 3.996011 9.233292 5.994528 14.471596 5.994528s10.475586-1.998517 14.47262-5.994528C984.888214 502.55693 984.888214 489.598804 976.897216 481.606783zM859.024621 933.313581c0 5.65172-4.581342 10.233062-10.233062 10.233062l-673.335479 0c-5.65172 0-10.233062-4.581342-10.233062-10.233062L165.223019 422.914032 498.231415 89.905636c3.883447-3.882424 9.04705-6.022157 14.539134-6.022157 5.491061 0 10.654664 2.13871 14.537088 6.022157l331.716984 331.715961L859.024621 933.313581z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anfangzaijia1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M367.962489 518.779404c0 49.632397 24.565489 93.63354 62.175061 120.488165-30.788214 10.252505-59.711963 25.996071-85.116563 46.654576-47.327912 38.485523-80.586386 92.309382-93.64889 151.554718-2.433422 11.038404 4.541433 21.959128 15.579837 24.393573 1.484817 0.326435 2.965541 0.484024 4.425799 0.484024 9.394974 0 17.860786-6.510274 19.966751-16.062837 11.08036-50.256614 39.314401-95.931886 79.501682-128.61117 38.526455-31.328519 86.599334-49.338708 136.210241-51.211359 2.935865 0.173962 5.891174 0.273223 8.870018 0.273223 2.916423 0 5.810333-0.094144 8.685823-0.261966 49.321312 1.941212 97.127108 19.840884 135.490857 50.913577 40.114626 32.488948 68.40188 77.940117 79.651085 127.97979 2.479471 11.028171 13.431917 17.959024 24.455995 15.47853 11.027148-2.479471 17.958-13.428847 15.47853-24.455995-13.261025-58.989509-46.581921-112.548332-93.823875-150.810774-25.195845-20.406772-53.846372-35.986609-84.330664-46.185902 37.711903-26.843368 62.355163-70.907956 62.355163-120.620172 0-81.58718-66.375733-147.962913-147.962913-147.962913S367.962489 437.192224 367.962489 518.779404zM622.956068 518.779404c0 56.310493-43.711548 102.601796-98.985432 106.72879-2.77009-0.085958-5.54325-0.144286-8.319479-0.144286-2.654456 0-5.305843 0.054235-7.954159 0.13303-55.186903-4.216022-98.801237-50.468438-98.801237-106.717534 0-59.017138 48.013527-107.030665 107.030665-107.030665S622.956068 459.762265 622.956068 518.779404z"  ></path>' +
    '' +
    '<path d="M976.897216 481.606783 556.251853 60.962443c-11.614525-11.614525-27.056216-18.011212-43.481304-18.011212-16.425088 0-31.867802 6.395664-43.482327 18.011212L48.643883 481.606783c-7.993045 7.993045-7.993045 20.951171 0 28.943193s20.951171 7.993045 28.943193 0l45.815465-45.815465 0 499.278257c0 11.30344 9.162684 20.466124 20.466124 20.466124l737.803769 0c11.30344 0 20.466124-9.162684 20.466124-20.466124L902.138558 464.735533l45.814442 45.814442c3.996011 3.996011 9.233292 5.994528 14.471596 5.994528s10.475586-1.998517 14.47262-5.994528C984.888214 502.55693 984.888214 489.598804 976.897216 481.606783zM859.024621 933.313581c0 5.65172-4.581342 10.233062-10.233062 10.233062l-673.335479 0c-5.65172 0-10.233062-4.581342-10.233062-10.233062L165.223019 422.914032 498.231415 89.905636c3.883447-3.882424 9.04705-6.022157 14.539134-6.022157 5.491061 0 10.654664 2.13871 14.537088 6.022157l331.716984 331.715961L859.024621 933.313581z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon_cook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M700.660312 552.419572c-0.002047 0 0 0-0.002047 0-29.437449-0.001023-56.80782-11.151991-77.067236-31.403221l-83.032088-83.045391c-39.582507-39.613206-41.993416-104.471376-5.631254-150.930501L669.68995 110.37483c3.416819-4.479011 8.600889-7.264451 14.220886-7.641027 5.622044-0.375553 11.129478 1.693572 15.113209 5.676279L953.150884 362.550223c3.983731 3.983731 6.051833 9.492188 5.675256 15.113209s-3.162016 10.804067-7.640004 14.219863L774.52767 526.640442C753.3043 543.264051 727.074915 552.419572 700.660312 552.419572zM687.198719 151.815661l-121.292484 159.007457c-0.053212 0.069585-0.106424 0.140193-0.161682 0.209778-24.27487 30.942733-23.225981 73.644277 2.437515 99.329263l83.023902 83.036181c12.879332 12.874215 30.444383 19.966751 49.454342 19.967774 17.757432 0 35.4637-6.225795 49.862641-17.530258 0.071631-0.056282 0.144286-0.11154 0.215918-0.167822l159.00848-121.293507L687.198719 151.815661z"  ></path>' +
    '' +
    '<path d="M602.961176 478.127542c-4.998851 0-9.995655-1.906419-13.808494-5.719258-7.625678-7.625678-7.624654-19.990287 0.001023-27.614941l209.319329-209.30705c7.624654-7.624654 19.990287-7.624654 27.614941 0.001023 7.625678 7.625678 7.624654 19.990287-0.001023 27.614941l-209.319329 209.30705C612.955808 476.221122 607.956957 478.127542 602.961176 478.127542z"  ></path>' +
    '' +
    '<path d="M551.532877 426.705382c-4.733814 0-9.480932-1.710968-13.234419-5.173836-7.928576-7.312546-8.426927-19.665899-1.115404-27.593452l194.316637-210.670094c7.312546-7.92653 19.666922-8.425903 27.592428-1.11438 7.928576 7.311523 8.426927 19.665899 1.11438 27.592428l-194.315614 210.670094C562.041208 424.590208 556.793694 426.705382 551.532877 426.705382z"  ></path>' +
    '' +
    '<path d="M814.00887 383.788943c-5.26184 0-10.505261-2.113127-14.353916-6.284123-7.313569-7.925507-6.819313-20.278859 1.107217-27.593452l58.886155-54.343699c7.925507-7.313569 20.278859-6.818289 27.592428 1.107217 7.313569 7.925507 6.819313 20.278859-1.107217 27.593452l-58.886155 54.343699C823.492872 382.075929 818.743708 383.788943 814.00887 383.788943z"  ></path>' +
    '' +
    '<path d="M760.32111 433.30673c-5.263887 0-10.509355-2.114151-14.358009-6.288217-7.312546-7.927553-6.812149-20.280906 1.11438-27.592428l53.688783-49.517787c7.92653-7.312546 20.280906-6.812149 27.592428 1.115404 7.312546 7.927553 6.812149 20.280906-1.115404 27.592428l-53.68776 49.517787C769.802042 431.595762 765.053901 433.30673 760.32111 433.30673z"  ></path>' +
    '' +
    '<path d="M662.236188 523.758812c-5.26491 0-10.510378-2.114151-14.360056-6.28924-7.311523-7.928576-6.809079-20.281929 1.118474-27.593452l98.084922-90.439802c7.9296-7.310499 20.282952-6.809079 27.592428 1.118474 7.312546 7.928576 6.810103 20.281929-1.118474 27.593452l-98.084922 90.439802C671.716096 522.048867 666.967956 523.758812 662.236188 523.758812z"  ></path>' +
    '' +
    '<path d="M354.340749 726.747969c-4.997827 0-9.995655-1.907443-13.808494-5.720282-7.625678-7.626701-7.624654-19.990287 0.001023-27.614941l241.567801-241.543242c7.627724-7.624654 19.99131-7.623631 27.614941 0.001023 7.625678 7.626701 7.624654 19.990287-0.001023 27.615964L368.14822 721.028711C364.335381 724.840526 359.337553 726.747969 354.340749 726.747969z"  ></path>' +
    '' +
    '<path d="M213.559399 921.309176c-12.278651 0-23.820522-4.787026-32.501228-13.478989l-29.093619-29.067013c-17.922185-17.900695-17.929348-47.057759-0.01535-64.996316l117.575836-117.575836c8.68787-8.67559 20.2236-13.450337 32.493042-13.450337 12.268418 0 23.805172 4.774747 32.483832 13.441127l29.115108 29.100782c8.685823 8.698103 13.462616 20.23895 13.462616 32.511461 0 12.285814-4.786003 23.826662-13.476943 32.496112L246.051417 907.84042C237.37992 916.523173 225.83805 921.309176 213.559399 921.309176zM302.01808 721.79619c-1.069355 0-3.1262 0.26299-4.886287 2.02103l-117.557416 117.557416c-2.689249 2.692319-2.696412 7.075139-0.008186 9.760295l29.111015 29.084409c1.771343 1.774413 3.818979 2.037403 4.883217 2.037403s3.111874-0.26299 4.867868-2.023076l117.575836-117.576859c1.760087-1.755993 2.02103-3.798513 2.02103-4.861728 0-1.071402-0.264013-3.133364-2.030239-4.90266l-29.095665-29.081339C305.14428 722.05918 303.087435 721.79619 302.01808 721.79619z"  ></path>' +
    '' +
    '<path d="M613.665982 725.885322c-4.997827 0-9.994632-1.905396-13.807471-5.719258L364.571764 484.904898c-7.625678-7.625678-7.626701-19.989263-0.001023-27.614941 7.625678-7.626701 19.989263-7.626701 27.615964-0.002047l235.286748 235.262188c7.625678 7.624654 7.626701 19.98824 0.001023 27.614941C623.662661 723.977879 618.662787 725.885322 613.665982 725.885322z"  ></path>' +
    '' +
    '<path d="M753.547847 921.30406c-12.268418 0-23.805172-4.774747-32.483832-13.440104L603.487156 790.286074c-17.918092-17.942651-17.910928-47.094598 0.00921-64.99427l29.102828-29.090549c8.668427-8.679683 20.211321-13.46671 32.489972-13.46671 12.277628 0 23.820522 4.787026 32.501228 13.477966L815.148833 813.771975c8.676613 8.665357 13.459546 20.204158 13.459546 32.482809 0 12.268418-4.776793 23.809265-13.45136 32.494065l-29.121248 29.107945C777.350972 916.529313 765.816265 921.30406 753.547847 921.30406zM665.089166 721.789027c-1.064238 0-3.110851 0.26299-4.868891 2.023076l-29.120224 29.106922c-2.689249 2.686179-2.682086 7.062859 0.01228 9.760295l117.558439 117.558439c1.749854 1.74883 3.806699 2.01182 4.877077 2.01182 1.068332 0 3.1262-0.26299 4.885264-2.02103l29.102828-29.090549c1.753947-1.755993 2.01796-3.814886 2.01796-4.883217 0-1.063215-0.260943-3.109828-2.01182-4.858658L669.966243 723.82029C668.200016 722.052017 666.153404 721.789027 665.089166 721.789027z"  ></path>' +
    '' +
    '<path d="M258.12643 540.282137c-51.420113 0-99.848079-20.12127-136.361691-56.656371-74.897827-74.883501-75.464739-196.193381-1.258667-270.412756 35.71441-35.70827 83.322707-55.371098 134.057205-55.371098 51.418067 0 99.853196 20.110013 136.385227 56.627718 74.894757 74.910107 75.448366 196.22408 1.237177 270.434246C356.468203 520.615215 308.857858 540.282137 258.12643 540.282137zM254.564301 196.895369c-40.304961 0-78.106916 15.60235-106.442264 43.932582-58.977229 58.989509-58.413388 155.522076 1.260713 215.184921 29.142737 29.15911 67.760267 45.214784 108.744703 45.214784 40.301891 0 78.104869-15.60542 106.446357-43.940768 58.983369-58.983369 58.428737-155.522076-1.238201-215.20027C334.18264 212.944903 295.552831 196.895369 254.564301 196.895369z"  ></path>' +
    '' +
    '<path d="M257.404999 470.78532c-31.364335 0-62.820768-11.996219-86.807065-35.960003-47.691185-47.737234-48.021713-125.010155-0.751107-172.266435 47.28391-47.281863 124.557854-46.948265 172.255179 0.74906 7.690146 7.718799 14.33038 16.373922 19.765159 25.752524 5.408173 9.330506 2.226714 21.278629-7.103792 26.685779-9.330506 5.40715-21.278629 2.226714-26.685779-7.103792-3.747347-6.466272-8.328689-12.43624-13.617136-17.745153-32.444946-32.443923-84.941578-32.779567-116.999714-0.720408-32.048927 32.038694-31.710212 84.538395 0.753153 117.033483 32.467459 32.435737 84.968184 32.767288 117.021204 0.724501 7.626701-7.624654 19.990287-7.623631 27.615964 0.005117 7.624654 7.626701 7.622608 19.990287-0.005117 27.614941C319.342654 459.051067 288.419364 470.78532 257.404999 470.78532z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yunxuzuofan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.503978 1023.765663c-68.955488 0-135.854131-13.506619-198.836581-40.146349-60.827367-25.728988-115.454522-62.558801-162.363901-109.467157-46.907333-46.909379-83.737146-101.536534-109.465111-162.363901C15.200702 648.806829 1.694083 581.910233 1.694083 512.956791c0-68.956511 13.506619-135.855154 40.144302-198.837604C67.565327 253.29182 104.39514 198.664665 151.302473 151.756309c46.908356-46.908356 101.535511-83.737146 162.363901-109.465111 62.981427-26.637684 129.880069-40.144302 198.836581-40.144302 68.954465 0 135.851061 13.506619 198.833511 40.144302C772.166903 68.019163 826.794058 104.848976 873.70446 151.756309c46.910403 46.908356 83.741239 101.535511 109.47125 162.363901 26.640754 62.98245 40.148395 129.881093 40.148395 198.837604 0 68.953442-13.507642 135.850038-40.148395 198.831464-25.728988 60.827367-62.560848 115.454522-109.47125 162.363901-46.910403 46.908356-101.538581 83.73817-162.367994 109.467157C648.354016 1010.259044 581.456397 1023.765663 512.503978 1023.765663zM512.503978 22.61302c-130.980123 0-254.117628 51.003628-346.728886 143.614885S22.159184 381.977691 22.160207 512.956791c0 270.375917 219.967854 490.342748 490.343771 490.342748 270.38308 0 490.355027-219.96683 490.355027-490.342748C1002.857982 242.580874 782.886035 22.61302 512.503978 22.61302z"  ></path>' +
    '' +
    '<path d="M638.030903 539.861558 638.030903 539.861558c-19.575848-0.021489-37.813211-7.424086-51.278897-20.912285l-55.255465-55.277978c-26.357298-26.358321-27.964912-69.5224-3.778046-100.447736l89.688695-117.564579c2.276856-2.99931 5.734608-4.855588 9.488095-5.081739 3.733021-0.25992 7.391341 1.110287 10.051937 3.76679l169.125909 169.124885c2.651386 2.645247 4.02057 6.324032 3.776 10.069333-0.2415 3.739161-2.098801 7.203052-5.102205 9.465582l-117.53695 89.688695C673.09142 533.763676 655.615397 539.861558 638.030903 539.861558L638.030903 539.861558zM629.070834 273.238105 548.328905 379.071502c-0.021489 0.033769-0.065492 0.077771-0.088004 0.13303-16.173354 20.590967-15.465227 49.01432 1.623987 66.098417l55.255465 55.288211c8.583492 8.566096 20.260439 13.294794 32.907481 13.294794 11.821233 0 23.617907-4.154623 33.18582-11.664667 0.064468-0.055259 0.10847-0.076748 0.132006-0.132006l105.839537-80.734766L629.070834 273.238105 629.070834 273.238105z"  ></path>' +
    '' +
    '<path d="M573.019237 490.412332c-3.337002 0-6.662747-1.255597-9.202593-3.822049-5.069459-5.053086-5.069459-13.287631 0-18.370393l139.288347-139.28323c5.081739-5.075599 13.33368-5.075599 18.381649 0 5.081739 5.081739 5.081739 13.289678 0 18.371416l-139.287323 139.282207C579.647191 489.157759 576.343959 490.412332 573.019237 490.412332L573.019237 490.412332z"  ></path>' +
    '' +
    '<path d="M538.808064 456.19502c-3.14769 0-6.340405-1.144056-8.838296-3.462868-5.258771-4.849448-5.589298-13.07376-0.717338-18.343787l129.300878-140.221602c4.89345-5.275143 13.102413-5.600555 18.382673-0.723477 5.258771 4.860704 5.609765 13.085016 0.717338 18.342764L548.328905 452.018907C545.766546 454.780811 542.276049 456.19502 538.808064 456.19502L538.808064 456.19502z"  ></path>' +
    '' +
    '<path d="M713.466989 427.63352c-3.523243 0-6.992251-1.391696-9.555633-4.186346-4.882194-5.258771-4.541433-13.482059 0.729617-18.348903l39.193651-36.172851c5.258771-4.855588 13.498432-4.535293 18.359137 0.734734 4.871961 5.269004 4.529153 13.493316-0.729617 18.359137L722.270493 424.192142C719.774649 426.489464 716.614679 427.63352 713.466989 427.63352L713.466989 427.63352z"  ></path>' +
    '' +
    '<path d="M677.742347 460.586027c-3.502777 0-6.993275-1.414209-9.56689-4.176113-4.872984-5.291516-4.517897-13.494339 0.73985-18.381649l35.725666-32.952506c5.28026-4.849448 13.509688-4.51278 18.358113 0.74599 4.882194 5.296633 4.550643 13.499455-0.729617 18.370393l-35.724643 32.963763C684.050006 459.453227 680.890037 460.586027 677.742347 460.586027L677.742347 460.586027z"  ></path>' +
    '' +
    '<path d="M612.445178 520.79634c-3.51301 0-6.992251-1.415232-9.543354-4.207835-4.882194-5.258771-4.541433-13.494339 0.740874-18.342764l65.274656-60.183707c5.28026-4.888334 13.489222-4.535293 18.382673 0.74599 4.848425 5.263887 4.50664 13.464663-0.751107 18.348903l-65.286935 60.182684C618.774327 519.647167 615.604124 520.79634 612.445178 520.79634L612.445178 520.79634z"  ></path>' +
    '' +
    '<path d="M407.560858 655.874805c-3.325745 0-6.650467-1.257643-9.207709-3.820002-5.053086-5.050016-5.053086-13.300934 0-18.381649l160.779823-160.735821c5.081739-5.075599 13.300934-5.075599 18.382673 0 5.081739 5.059226 5.058203 13.30605 0 18.381649L416.746054 652.075269C414.188812 654.615115 410.86409 655.874805 407.560858 655.874805L407.560858 655.874805z"  ></path>' +
    '' +
    '<path d="M313.851593 785.364995c-8.15268 0-15.845896-3.179412-21.624507-8.946766l-19.358907-19.35379c-11.919471-11.94096-11.919471-31.352055-0.021489-43.258223l78.282924-78.255295c5.777587-5.788843 13.438057-8.947789 21.600971-8.947789 8.18031 0 15.845896 3.158946 21.630646 8.947789l19.376303 19.35379c5.782703 5.786797 8.959046 13.465686 8.959046 21.650089 0 8.16496-3.176342 15.84078-8.979512 21.60711l-78.232782 78.256318C329.703629 782.183536 322.031902 785.364995 313.851593 785.364995L313.851593 785.364995zM372.719328 652.560316c-0.701988 0-2.071172 0.197498-3.25923 1.346671l-78.232782 78.256318c-1.77339 1.789763-1.806135 4.706185 0 6.473435l19.358907 19.397792c1.187035 1.160429 2.552126 1.326205 3.25309 1.326205 0.723477 0 2.092661-0.177032 3.246951-1.326205l78.256318-78.256318c1.165546-1.171686 1.346671-2.539846 1.346671-3.224438 0-0.730641-0.182149-2.111081-1.346671-3.292999l-19.377326-19.35379C374.801756 652.759861 373.442806 652.560316 372.719328 652.560316L372.719328 652.560316z"  ></path>' +
    '' +
    '<path d="M580.144518 655.30073c-3.337002 0-6.661723-1.258667-9.191336-3.822049L414.349471 494.924089c-5.058203-5.075599-5.058203-13.323447 0-18.371416 5.075599-5.087878 13.31219-5.087878 18.393929 0l156.570965 156.565848c5.058203 5.070482 5.103228 13.299911 0 18.358113C586.793962 654.042063 583.46924 655.30073 580.144518 655.30073L580.144518 655.30073z"  ></path>' +
    '' +
    '<path d="M673.223427 785.364995c-8.17417 0-15.839757-3.179412-21.618367-8.946766l-78.255295-78.256318c-11.918447-11.929704-11.918447-31.339776 0.021489-43.2572l19.365046-19.35379c5.777587-5.788843 13.43294-8.947789 21.618367-8.947789 8.16496 0 15.852036 3.158946 21.61939 8.947789l78.232782 78.255295c5.78782 5.777587 8.947789 13.43294 8.947789 21.629623 0 8.153704-3.15997 15.83157-8.9263 21.630646l-19.377326 19.35379C689.086719 782.183536 681.388387 785.364995 673.223427 785.364995L673.223427 785.364995zM614.355691 652.560316c-0.717338 0-2.066055 0.197498-3.246951 1.346671l-19.387559 19.377326c-1.77646 1.789763-1.77646 4.706185 0.033769 6.517437l78.221526 78.232782c1.159406 1.160429 2.529613 1.326205 3.246951 1.326205 0.706081 0 2.099824-0.177032 3.247974-1.326205l19.35379-19.377326c1.193175-1.171686 1.347694-2.552126 1.347694-3.247974 0-0.718361-0.154519-2.067079-1.302669-3.247974l-78.256318-78.256318C616.421746 652.759861 615.074052 652.560316 614.355691 652.560316L614.355691 652.560316z"  ></path>' +
    '' +
    '<path d="M343.500866 531.797905c-34.195823 0-66.435085-13.398148-90.743724-37.706787-49.825802-49.843198-50.212612-130.59536-0.822738-179.962721 23.76117-23.778566 55.437613-36.862559 89.214904-36.862559 34.217313 0 66.455551 13.382798 90.76419 37.691437 49.831942 49.848315 50.203402 130.582057 0.829901 179.979094C408.952554 518.675026 377.293507 531.797905 343.500866 531.797905L343.500866 531.797905zM341.148285 303.246559c-26.843368 0-51.975768 10.373255-70.842465 29.240975-39.254026 39.266305-38.867216 103.491049 0.822738 143.188166 19.409049 19.409049 45.109384 30.085202 72.39482 30.085202 26.820855 0 51.979862-10.373255 70.826092-29.240975 39.271422-39.248909 38.889729-103.480816-0.828878-143.204539C394.134057 313.934992 368.433722 303.246559 341.148285 303.246559L341.148285 303.246559z"  ></path>' +
    '' +
    '<path d="M343.037309 485.551628c-20.878516 0-41.806151-8.009418-57.779961-23.960715-31.721469-31.775704-31.94148-83.176374-0.48607-114.631784 31.455409-31.461549 82.894965-31.268144 114.631784 0.48607 5.114484 5.130857 9.528004 10.914584 13.167904 17.172101 3.584642 6.185886 1.473561 14.140045-4.728698 17.747199-6.219655 3.584642-14.161534 1.469468-17.779945-4.750187-2.479471-4.291746-5.522784-8.257058-9.063423-11.797697-21.569248-21.595854-56.525388-21.811772-77.857229-0.48607-21.325701 21.320585-21.12104 56.261375 0.508583 77.890998 21.60711 21.60711 56.547901 21.811772 77.862345 0.48607 5.087878-5.075599 13.311167-5.075599 18.381649 0 5.087878 5.094018 5.087878 13.307074 0 18.382673C384.258129 477.724359 363.694791 485.551628 343.037309 485.551628L343.037309 485.551628z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.650449 80.538291 796.105105 80.538291c-18.912745 0-34.237779 15.32708-34.237779 34.240849l0 422.283676L99.904872 537.062815c-18.912745 0-34.237779 15.322987-34.237779 34.238802l57.065693 330.97918c0 18.901489 15.326057 34.237779 34.237779 34.237779l764.679883 0c18.902512 0 34.237779-15.33629 34.237779-34.237779L955.888228 114.77914C955.888228 95.865371 940.552961 80.538291 921.650449 80.538291zM933.06236 890.86991c0 12.605086-10.219759 22.826891-22.825868 22.826891L168.384523 913.696802c-12.605086 0-22.826891-10.220782-22.826891-22.826891l-57.063647-308.155359c0-12.605086 10.219759-22.824845 22.825868-22.824845l673.372318 0L784.692171 126.19105c0-12.606109 10.220782-22.827915 22.826891-22.827915l102.718453 0c12.605086 0 22.825868 10.221806 22.825868 22.827915L933.063383 890.86991zM71.373049 457.170231l661.960407 0c3.15383 0 5.704932-2.551102 5.704932-5.705955l0-11.412934c0-3.152806-2.551102-5.705955-5.704932-5.705955L71.373049 434.345386c-3.152806 0-5.705955 2.553149-5.705955 5.705955l0 11.412934C65.667094 454.619128 68.220243 457.170231 71.373049 457.170231z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qiehuanfangdong" viewBox="0 0 1074 1024">' +
    '' +
    '<path d="M537.088 257.536c140.288 0 254.464 114.176 254.464 254.464s-114.176 254.464-254.464 254.464-254.464-114.176-254.464-254.464 114.176-254.464 254.464-254.464m0-20.48c-151.552 0-274.944 122.88-274.944 274.944s122.88 274.944 274.944 274.944c151.552 0 274.944-122.88 274.944-274.944s-123.392-274.944-274.944-274.944z"  ></path>' +
    '' +
    '<path d="M418.304 473.6h207.36l-53.76-54.784c-5.12-5.12-5.12-12.8 0-17.92s12.8-5.12 17.92 0l75.264 76.288c3.584 3.584 4.608 9.216 2.56 13.824s-6.656 7.68-11.776 7.68h-237.568c-7.168 0-12.288-5.632-12.288-12.8-0.512-6.656 5.12-12.288 12.288-12.288zM655.872 563.2h-207.36l40.96 41.984c5.12 5.12 5.12 12.8 0 17.92s-12.8 5.12-17.92 0l-62.464-63.488c-2.56-2.56-3.584-5.632-3.584-9.216 0-1.536 0.512-3.072 1.024-5.12 2.048-4.608 6.656-7.68 11.776-7.68h237.568c6.656 0 12.288 5.632 12.288 12.8 0.512 6.656-5.12 12.8-12.288 12.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xishuyongpin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M836.180479 174.567826H680.890351a52.893496 52.893496 0 0 0 1.595163-12.905209V52.7945c0-29.157914-23.637607-52.795521-52.795521-52.795521h-91.806094c-27.49233 0-50.067516 21.016763-52.558746 47.858985H195.396292c-14.225837 0-59.835468 28.744579-59.835467 28.74458l2.933141 37.544003s42.823453-26.398271 56.902326-26.398271h289.692087v73.914341c0 4.452782 0.557236 8.77493 1.595163 12.905209h-131.532093c-51.189131 0-92.685832 41.496702-92.685832 92.685832v664.054386c0 51.189131 41.496702 92.685832 92.685832 92.685833h481.02903c51.189131 0 92.685832-41.496702 92.685832-92.685833V267.253658c0-51.189131-41.496702-92.685832-92.685832-92.685832zM527.324999 88.170795c0-22.77726 13.240979-41.242578 29.57533-41.242577h51.427946c16.334351 0 29.57533 18.465318 29.57533 41.242577v85.044765c0 0.453137-0.014288 0.902191-0.024494 1.352266h-110.528597c-0.010206-0.450075-0.024494-0.899129-0.024494-1.352266v-85.044765z m359.304692 802.524368c0 45.108527-35.944757 81.675837-80.284789 81.675837H389.679644c-44.340032 0-80.284789-36.56731-80.284789-81.675837V305.520231c0-45.108527 35.944757-81.676857 80.284789-81.676858h416.666278c44.340032 0 80.284789 36.56731 80.284789 81.676858v585.174932z" fill="#262731" ></path>' +
    '' +
    '<path d="M356.325114 399.829803c-9.071918 0-16.425182 7.354285-16.425182 16.425182v236.994541c0 9.071918 7.354285 16.425182 16.425182 16.425183s16.425182-7.354285 16.425182-16.425183V416.254985c0-9.070897-7.353265-16.425182-16.425182-16.425182zM356.325114 697.833476c-9.071918 0-16.425182 3.581208-16.425182 7.99827v115.40594c0 4.417062 7.354285 7.99827 16.425182 7.99827s16.425182-3.581208 16.425182-7.99827V705.831746c0-4.418082-7.353265-7.99827-16.425182-7.99827z" fill="#262731" ></path>' +
    '' +
    '<path d="M95.132668 187.53427a42.762218 16.498664 90 1 0 32.997328 0 42.762218 16.498664 90 1 0-32.997328 0Z" fill="#262731" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)