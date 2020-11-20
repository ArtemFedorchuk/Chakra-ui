import React, {useState} from 'react';
import Text from '@chakra-ui/core/dist/Text';
import Input from '@chakra-ui/core/dist/Input';
import Button from '@chakra-ui/core/dist/Button';
import ButtonGroup from '@chakra-ui/core/dist/ButtonGroup';
import { useSettingsData } from '../../contexts/settings-context/SettingsContext';
import styles from './styles.module.scss'

const SettingsInputsGroup = () => {
  const [validate, setValidate] = useState(false)
  const { dataSettings, setSettingsValues } = useSettingsData()

  console.log('dataSettings => ', dataSettings);

  const handleChangeApiKey = (event) => {
    setSettingsValues({
      apiKey: event.target.value
    })
  }
  const handleChangeSecretKey = (event) => {
    setSettingsValues({
      secretKey: event.target.value
    })
  }

  const handleSaveSettings = () => {
    if(dataSettings.apiKey && dataSettings.secretKey) {
      console.log('good!')
      setValidate(false)
    }else {
      setValidate(true)
    }
  }

  return (
    <div className={styles.settingsInputsWrapper}>
      <div className={styles.settingInputItem}>
        <Text mb="8px">Api Key</Text>
        <Input
          className={!validate ? styles.inputSettingItem: styles.inputSettingItemError}
          onChange={handleChangeApiKey}
          placeholder="API key"
          size="sm"
        />
      </div>

      <div className={styles.settingInputItem}>
        <Text mb="8px">Secret Key</Text>
        <Input
          className={!validate ? styles.inputSettingItem: styles.inputSettingItemError}
          onChange={handleChangeSecretKey}
          placeholder="SECRET Key"
          size="sm"
        />
      </div>

      <ButtonGroup variant="outline">
        <Button
          className={styles.saveButton}
          colorScheme="blue"
          onClick={handleSaveSettings}
        >
          SAVE SETTINGS
        </Button>
      </ButtonGroup>
    </div>
  )
};

export default SettingsInputsGroup;